// Import functions to test:
const { createBlog, getBlogs } = require("../blogController");

const { mockReqData, mockBlogPostData } = require("../../../__mocks__/data");

const { __mocks__ } = require("../../models/__mocks__/Blog.mock");

jest.mock("../../services/google-cloud-storage");
const googleCloudStorage = require("../../services/google-cloud-storage");

jest.mock("../../models/Blog");
const Blog = require("../../models/Blog");

let req, res;

describe("Blogs Controller: createBlog", () => {
  beforeEach(() => {
    req = mockReqData;
    res = {
      status: jest.fn(),
      json: jest.fn(),
    };

    googleCloudStorage.uploadToGoogleCloudStorage.mockResolvedValue(
      "https://storage.googleapis.com/ix-blog-app/default.jpeg"
    );

    Blog.mockClear();
    __mocks__.mockSave.mockClear();
    __mocks__.mockPopulate.mockClear();
  });

  test("That the createBlog creates a blog with a valid payload", async () => {
    __mocks__.mockPopulate.mockResolvedValue(mockBlogPostData);
    __mocks__.mockSave.mockResolvedValue(mockBlogPostData);
    await createBlog(req, res);
    expect(googleCloudStorage.uploadToGoogleCloudStorage).toHaveBeenCalledWith(
      "path/to/file"
    );
    expect(Blog).toHaveBeenCalledWith({
      title: req.body.title,
      description: req.body.description,
      image: "https://storage.googleapis.com/ix-blog-app/default.jpeg",
      content: JSON.parse(req?.body?.content),
      authorId: req.body.authorId,
      categoryIds: ["665945dbc2294698fe74d8d4", "665945ffc2294698fe74d8d9"],
    });
    expect(__mocks__.mockSave).toHaveBeenCalled();
    expect(__mocks__.mockPopulate).toHaveBeenCalled();
    expect(Blog.findById).toHaveBeenCalledWith(mockBlogPostData._id);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Created blog!",
      data: mockBlogPostData,
    });
  });

  test("That the createBlog function throws an error when the payload is not valid", async () => {
    const error = new Error("Mock Error!");
    __mocks__.mockSave.mockRejectedValue(error);
    await createBlog(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: error.message,
    });
  });
});

describe("Blogs Controller: getBlogs", () => {
  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    Blog.mockClear();
    __mocks__.mockSave.mockClear();
    __mocks__.mockPopulate.mockClear();
  });

  test("Should return all blogs data", async () => {
    __mocks__.mockPopulate.mockResolvedValue([mockBlogPostData]);
    await getBlogs(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Return all blogs!",
      data: [mockBlogPostData],
    });
  });

  test("should handle get blogs errors", async () => {
    const error = new Error("Mock Error!");
    __mocks__.mockPopulate.mockRejectedValue(error);
    await getBlogs(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: error.message });
  });
});
