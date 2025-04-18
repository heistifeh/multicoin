import { get, set } from "mongoose";
import React from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { updateVerificationStatus } from "../redux/user/userSlice.js";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
const VerifyIdentity = () => {
  //states
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageUploadSuccess, setImageUploadSuccess] = useState("");
  // for image upload
  const [formData, setFormData] = useState({
    imageUrl: [],
  });
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const uploadFile = async (img) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "images_preset");

    try {
      let cloudName = "dyvvq1ycl";
      let resourceType = "image";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      // console.error(error);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (frontImage && backImage) {
      try {
        setUploading(true);
        setImageUploadSuccess("");
        setImageUploadError("");
        // Upload image file
        const frontImgUrl = await uploadFile(frontImage);
        const backImgUrl = await uploadFile(backImage);
        // Send backend api request
        // await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/api/videos`, { imgUrl, videoUrl });
        // Reset states
        setFormData({
          ...formData,
          imageUrl: [frontImgUrl, backImgUrl],
        });
        setFrontImage(null);
        setBackImage(null);
        setImageUploadSuccess("Document upload success!");
        setImageUploadError("");
        toast.success("Document upload success!");
        setUploading(false);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      setImageUploadError(
        "Image upload failed, you can only upload two images."
      );
      setImageUploadSuccess("");
    }
  };
  //   const handleSubmit = (e)=>{
  // e.preventDefault();
  // setFormData({
  //   ...formData,
  //   [e.target.id]: e.target.value,
  // })
  //   }
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.imageUrl.length > 1 && formData.ssn) {
      setImageUploadError(null);
      setImageUploadSuccess(null);
      setLoading(true);
      const res = await fetch(
        `https://multicoin-xdbp.onrender.com/api/verify/verify-identity/${currentUser._id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
             "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        return setImageUploadError("unable to upload images, please retry.");
      }

      // Update the frontend state with the new verification status
      // (e.g., set user as verified, hide verification message)
      toast.success("Upload success! Identity verification in progress...");
      setLoading(false);
      setImageUploadError(null);
      dispatch(updateVerificationStatus(true)); // Update the currentUser state directly

      // Optionally: You can set this in your global state if using Redux
      // dispatch(setUserVerified(true)); // If using Redux to manage state

      // Navigate to dashboard or a verification success page
      navigate("/dashboard");
    } else {
      setImageUploadError("please fill all credentials.");
    }
  };

  return (
    <div className="px-4 sm:px-0">
      <div className="flex gap-2 items-center p-4">
        <img src="./logo1.jpg" alt="multicoin" className="rounded-lg" />
        <span className="text-4xl font-bold text-black">Multicoin</span>
      </div>
      <div className="my-10 mx-auto max-w-lg">
        <h1 className="text-black text-2xl sm:text-5xl font-bold mb-4 text-center">
          Verify your Identity
        </h1>
        <p className="text-sm sm:text-base text-center">
          To ensure the security of your account, please verify your identity.
          This helps us protect your information and provide a safe experience.
        </p>
        <form onSubmit={handleSubmit} className="my-4 ">
          <div className="border-t-1 border-slate-200 p-3">
            <p className="font-bold">Input your SSN: </p>
            <input
              type="text"
              placeholder="SSN"
              id="ssn"
              onChange={handleChange}
              className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
            />
          </div>
          <div className="border-t-1 border-slate-200 p-3 mt-4">
            <label htmlFor="img" className="font-bold">
              Upload Front Image:
            </label>
            <br />
            <input
              type="file"
              accept="image/*"
              id="img"
              placeholder="heyy"
              onChange={(e) => setFrontImage((prev) => e.target.files[0])}
              className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
            />
          </div>
          <br />
          <div className=" p-3 ">
            <label htmlFor="img" className="font-bold">
              Upload Back Image:
            </label>
            <br />
            <input
              type="file"
              accept="image/*"
              id="img"
              onChange={(e) => setBackImage((prev) => e.target.files[0])}
              className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
            />
            <button
              onClick={handleImageUpload}
              type="button"
              disabled={uploading}
              className="mx-auto  bg-primary text-white font-bold py-2 px-4 rounded mt-4"
            >
              {uploading ? "Upload Images..." : "Upload Images"}
            </button>
            {imageUploadSuccess && (
              <div>
                <p className="text-green-500 mt-2">{imageUploadSuccess}</p>
                {formData.imageUrl.map((image, index) => (
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    key={index}
                    className="w-1/2"
                  />
                ))}
              </div>
            )}
            {imageUploadError && (
              <p className="text-red-500 mt-2">{imageUploadError}</p>
            )}
          </div>
          <br />

          <button
            type="submit"
            disabled={loading}
            className="mx-auto  bg-primary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer w-full"
          >
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyIdentity;
