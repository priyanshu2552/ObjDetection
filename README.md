**📷 Object Detection Web Application
A full-stack MERN application that detects objects in uploaded images using AI models with bounding boxes visualization.**

**📋 Features**
✅ Object detection using AI models (Hugging Face API)
✅ Secure and optimized for performance

**🛠️ Tech Stack**
Frontend: React, Axios, HTML5, CSS3
Backend: Node.js, Express.js
AI Model API: Hugging Face API (DETR ResNet-50)
Deployment: Render

**📂 Project Structure**
/ObjectDetectionWebApp
 ├── /backend
 │    ├── controllers/
 │    │    ├── deepaiController.js
 │    │    ├── detectController.js
 │    │    └── visionController.js
 │    ├── routes/
 │    │    └── detect.js
 │    ├── .env
 │    ├── package.json
 │    └── server.js
 │
 ├── /frontend
 │    ├── /public
 │    ├── /src
 │    │    ├── components/
 │    │    │    ├── ImageUpload.jsx
 │    │    │    ├── DetectionResult.jsx
 │    │    │    └── Dashboard.jsx
 │    │    ├── App.js
 │    │    └── index.js
 │    ├── .env
 │    ├── package.json
 │    └── static.json
 │
 ├── .gitignore
 ├── README.md
 └── package.json

**⚙️ Setup and Installation**
Follow these steps to set up the project locally:

🔹 **Step 1: Clone the Repository**
bash
Copy
Edit
git clone https://github.com/priyanshu2552/ObjDetection.git
cd ObjDetection
🔹 **Step 2: Install Dependencies**
For Backend:

bash
Copy
Edit
cd backend
npm install
For Frontend:

bash
Copy
Edit
cd ../frontend
npm install
🔹 **Step 3: Environment Variables**
Create a .env file in both the backend.

Backend .env Example:


Copy
Edit
PORT=5000
HF_API_KEY=your_hugging_face_api_key

🔹 **Step 4: Run the Application**
For Backend:

bash
Copy
Edit
cd backend
node server.js
For Frontend:

bash
Copy
Edit
cd frontend
npm start

**📸 How to Use the App**
Upload an Image: Select an image with objects for detection.
Detect Objects: Click the "Upload & Detect" button.
View Results: result will be shown in json format for detected objects

