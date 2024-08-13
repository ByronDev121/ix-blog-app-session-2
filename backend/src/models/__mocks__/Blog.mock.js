const Blog = require("../Blog");

// This is called by default in __mocks__
jest.mock("../Blog");

const mockSave = jest.fn();
const mockPopulate = jest.fn();

Blog.mockImplementation(() => ({
  save: mockSave,
}));

Blog.find.mockImplementation(() => ({
  populate: () => ({
    populate: mockPopulate,
  }),
}));

Blog.findById.mockImplementation(() => ({
  populate: () => ({
    populate: mockPopulate,
  }),
}));

module.exports = Blog;
module.exports.__mocks__ = {
  mockSave,
  mockPopulate,
};
