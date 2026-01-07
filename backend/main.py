from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_credentials=True,
    allow_headers=["*"],
    
)

model=joblib.load('salary_model.pkl')


@app.get("/predict-salary")
def predict_salary(years:float):
    #model expects a 2d array:[[value]]
    prediction=model.predict(np.array([[years]]))
    # Access the specific value inside the nested array
    return {"salary": round(float(prediction[0][0]), 2)}





poly=joblib.load('poly_transformer.pkl')
fuel_model=joblib.load('fuel_model.pkl')

@app.get("/predict-fuel")
def predict_fuel(speed:float):
    speed_poly=poly.transform([[speed]])
    prediction=fuel_model.predict(speed_poly)
    return{"mpg":round(float(prediction[0][0]),2)}


decision=joblib.load('decisiontree.pkl')

@app.get("/predict-loan")
def predict_validate(score:int,income:int,employed:int):
    prediction=decision.predict([[score,income,employed]])
    return{"status":prediction[0]}


randomReg = joblib.load('randomregression.pkl')
label_encoder = joblib.load('label_encoder.pkl')

@app.get("/randomregression")
def predict_salary(position: str, level: int):
    # 1. Use the fitted encoder to turn string into number
    pos_encoded = label_encoder.transform([position])[0]
    
    # 2. Match the exact order from your notebook: [Level, Position]
    input_data = np.array([[level, pos_encoded]])
    
    # 3. Predict
    prediction = randomReg.predict(input_data)
    
    return {"predicted_salary": float(prediction[0])}