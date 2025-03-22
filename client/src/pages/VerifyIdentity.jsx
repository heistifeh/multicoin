import { get } from "mongoose";
import React from "react";
import firebase from "firebase/compat/app";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase.js";
const VerifyIdentity = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrl: [],
  });
  const [imageUploadError, setImageUploadError] = useState(null);
  const handleImageSubmit = async (e) => {
    if (files.length > 0 && files.length < 7) {
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        promises.push(uploadImage(files[i]));
      }
      // await Promise.all(promise);
      Promise.all(promises)
        .then((urls) => {
          setFormData({ ...formData, imageUrl: form.imageUrl.concat(urls) });
          setImageUploadError(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2mb per file)");
        });
    } else {
      setImageUploadError(
        "Image upload failed, you can only upload two images."
      );
    }
  };

  const uploadImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  return (
    <div>
      <form className="flex flex-col max-w-lg mx-auto">
        <input type="text" placeholder="SSN" />
        <input
          onChange={(e) => setFiles(e.target.files)}
          type="file"
          accept="image/*"
          multiple
        />
        <button onClick={handleImageSubmit} type="button">
          Upload images
        </button>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default VerifyIdentity;
