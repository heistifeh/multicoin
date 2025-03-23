//  const [files, setFiles] = useState([]);
//   const [formData, setFormData] = useState({
//     imageUrl: [],
//   });
//   const [imageUploadError, setImageUploadError] = useState(null);
  // const handleImageSubmit = async (e) => {
  //   if (files.length > 0 && files.length < 7) {
  //     const promises = [];
  //     for (let i = 0; i < files.length; i++) {
  //       promises.push(uploadImage(files[i]));
  //     }
  //     // await Promise.all(promise);
  //     Promise.all(promises)
  //       .then((urls) => {
  //         setFormData({ ...formData, imageUrl: formData.imageUrl.concat(urls) });
  //         setImageUploadError(false);
  //       })
  //       .catch((err) => {
  //         setImageUploadError("Image upload failed (2mb per file)");
  //       });
  //   } else {
  //     setImageUploadError(
  //       "Image upload failed, you can only upload two images."
  //     );
  //   }
  // };

  // const uploadImage = async (file) => {
  //   return new Promise((resolve, reject) => {
  //     const storage = getStorage(app);
  //     const fileName = new Date().getTime() + file.name;
  //     const storageRef = ref(storage, fileName);
  //     const uploadTask = uploadBytesResumable(storageRef, file);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log(`Upload is ${progress}% done`);
  //       },
  //       (error) => {
  //         reject(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           resolve(downloadURL);
  //         });
  //       }
  //     );
  //   });
  // };