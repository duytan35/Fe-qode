import axiosClient from "./axios";

export const uploadImage = async (file: File) => {
  const res = await axiosClient({
    method: "post",
    url: "/files",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: {
      file,
    },
  });

  return res;
};

export const createComment = async (postId: string, content: string) => {
  const res = await axiosClient.post("/comments", {
    postId,
    content,
    username: "Duy Tan",
  });

  return res;
};

export const getPosts = async () => {
  const res = await axiosClient.get("/posts", {});

  return res.data.data;
};
