<template>
  <form
    @submit.prevent="onSubmit"
    enctype="multipart/form-data"
    style="width: 100%"
  >
    <div style="width: 100%">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="col-span-6">
            <label for="page" class="block text-sm font-medium text-gray-700"
              >Страница</label
            >
            <select
              id=""
              name="page"
              class="
                mt-1
                block
                w-full
                py-2
                px-3
                border border-gray-300
                bg-white
                rounded-md
                shadow-sm
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                sm:text-sm
              "
              v-model="newElement.pageId"
              @change="switchType"
            >
              <option v-for="page in pages" :key="page._id" :value="page._id">
                {{ page.name }}
              </option>
            </select>
          </div>
          <div class="col-span-6" v-if="page_type !== 'Описание'">
            <label for="picture" class="block text-sm font-medium text-gray-700"
              >Изображение</label
            >
            <input
              type="file"
              ref="file"
              name="picture"
              id="picture"
              class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
                px-3
                py-2
              "
              @change="selectFile"
            />
          </div>
          <div class="col-span-6">
            <label for="heading" class="block text-sm font-medium text-gray-700"
              >Заголовок</label
            >
            <input
              type="text"
              name="heading"
              id="heading"
              class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
                px-3
                py-2
              "
              v-model="newElement.heading"
            />
          </div>
          <div class="col-span-6" v-if="page_type === 'Каталог'">
            <label for="price" class="block text-sm font-medium text-gray-700"
              >Цена</label
            >
            <input
              type="text"
              name="price"
              id="price"
              class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
                px-3
                py-2
              "
              v-model="newElement.price"
            />
          </div>
          <div class="col-span-6">
            <label for="post" class="block text-sm font-medium text-gray-700"
              >Детальное описание</label
            >
            <tiptap v-model:modelValue="newElement.modelValue" />
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            class="
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Tiptap from "../Base/Tiptap.vue";
import axios from "axios";

export default {
  data() {
    return {
      newElement: {
        imagePath: "",
        heading: "",
        pageId: "",
        modelValue: "",
        userId: localStorage.getItem("user_id"),
        author: localStorage.getItem("username"),
        price: ""
      },
      pages: [],
      page_type: ""
    };
  },
  methods: {
    selectFile() {
      this.newElement.imagePath = this.$refs.file.files[0];
    },
    onSubmit() {
      const formData = new FormData();

      let element = {
        imagePath: this.newElement.imagePath,
        heading: this.newElement.heading,
        pageId: this.newElement.pageId,
        modelValue: this.newElement.modelValue,
        userId: this.newElement.userId,
        author: this.newElement.author,
        price: this.newElement.price
      };

      formData.append("imagePath", element.imagePath);
      formData.append("heading", element.heading);
      formData.append("pageId", element.pageId);
      formData.append("modelValue", element.modelValue);
      formData.append("userId", element.userId);
      formData.append("author", element.author);
      formData.append("price", element.price);
      axios
        .post("http://localhost:3001/add-element", formData)
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    async getPages() {
      try {
        await axios
          .get("http://localhost:3001/pages")
          .then((res) => {
            console.log(res.data.data);
            this.pages = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    // async getCurrentUser() {
    //   try {
    //     await axios
    //       .get(`http://localhost:3001/user/${user._id}`)
    //       .then((res) => {
    //         console.log(res);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
  components: {
    Tiptap,
  },
  computed: {
    switchType() {
      const currentPage = this.pages.find(obj => obj._id === this.newElement.pageId); 
      this.page_type = currentPage.page_type;
    }
  },
  created() {
    this.getPages();
  },
};
</script>

<style></style>
