const Page = require("../models/pageModel");

exports.addPage = async (req, res, next) => {
  try {
    const { name, page_type } = req.body;
    const newPage = new Page({
      name,
      page_type
    });
    await newPage.save();
    res.status(200).json({
      data: newPage
    });
  } catch (error) {
    next(error);
  }
};

exports.getPages = async (req, res, next) => {
  const pages = await Page.find({});
  res.status(200).json({
    data: pages,
  });
};

exports.getPage = async (req, res, next) => {
  try {
    const pageId = req.params.pageId;
    const page = await Page.findById(pageId);
    if (!page) return next(new Error("Данной записи не существует")); //Post does not exist
    res.status(200).json({
      data: page,
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePage = async (req, res, next) => {
  try {
    const update = req.body;
    const pageId = req.params.pageId;
    await Page.findByIdAndUpdate(pageId, update);
    const page = await Page.findById(pageId);
    res.status(200).json({
      data: page,
      message: "Запись обновлена", //Post has been updated
    });
  } catch (error) {
    next(error);
  }
};

exports.deletePage = async (req, res, next) => {
  try {
    const pageId = req.params.pageId;
    await Page.findByIdAndDelete(pageId);
    res.status(200).json({
      data: null,
      message: "Запись удалена", //Post has been deleted
    });
  } catch (error) {
    next(error);
  }
};
