**📷 Object Detection Web Application**
A full-stack MERN application that detects objects in uploaded images using AI models with bounding boxes visualization.

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
🔹 Step 1: Clone the Repository
git clone https://github.com/priyanshu2552/ObjDetection.git
cd ObjDetection

🔹 Step 2: Install Dependencies
For Backend:
cd backend
npm install
For Frontend:
cd ../frontend
npm install

🔹 Step 3: Environment Variables
Create a .env file in the backend folder with the following:
Backend .env Example:
PORT=5000
HF_API_KEY=your_hugging_face_api_key

🔹 Step 4: Run the Application
For Backend:
cd backend
node server.js
For Frontend:
cd frontend
npm start

**📸 How to Use the App**
1️⃣ Upload an Image: Select an image with objects for detection.
2️⃣ Detect Objects: Click the "Upload & Detect" button.
3️⃣ View Results: The result will be shown in JSON format for detected objects.

🔹 Note:
The current version does not include bounding boxes visualization or enhanced UI design. These features will be implemented in future updates as per project requirements.
