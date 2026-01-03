from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    
)

model=joblib.load('salary_model.pkl')


@app.get("/predict-salary")
def predict_salary(years:float):
    #model expects a 2d array:[[value]]
    prediction=model.predict(np.array([[years]]))
    # Access the specific value inside the nested array
    return {"salary": round(float(prediction[0][0]), 2)}