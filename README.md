# Regression Project

This repository contains a machine-learning regression demo that exposes prediction endpoints through a FastAPI backend and visualizes them through a Next.js frontend.

## Project Overview

The application demonstrates several predictive models for different prediction tasks:

- Salary prediction using a linear regression model
- Fuel efficiency prediction using polynomial feature transformation and a regression model
- Loan eligibility prediction using a decision tree classifier
- Random regression salary estimate using a random regression model with label encoding

The frontend is built with Next.js and TypeScript, while the API layer is implemented in FastAPI.

## Tech Stack

- Python: FastAPI, scikit-learn, joblib, numpy, pandas
- Frontend: Next.js, React, TypeScript
- Machine learning model artifacts stored as pickle files in the backend folder

## Project Structure

```text
backend/
  main.py                 # FastAPI endpoints and model loading
  salary_model.pkl        # Salary prediction model
  fuel_model.pkl          # Fuel prediction model
  poly_transformer.pkl     # Polynomial preprocessing pipeline
  decisiontree.pkl        # Loan eligibility classifier
  randomregression.pkl    # Salary regression model
  label_encoder.pkl       # Position label encoder

frontend/
  app/                    # Next.js pages and route views
  components/             # UI components used by the pages
  package.json            # Frontend dependencies and scripts

requirements.txt          # Python dependencies
```

## Backend Setup

1. Create and activate a Python virtual environment.
2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Start the API from the backend directory:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API exposes these endpoints:

- GET /predict-salary?years=<number>
- GET /predict-fuel?speed=<number>
- GET /predict-loan?score=<int>&income=<int>&employed=<int>
- GET /randomregression?position=<string>&level=<int>

## Frontend Setup

1. Move into the frontend project:

```bash
cd frontend
```

2. Install JavaScript packages:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open the app in a browser at:

http://localhost:3000

## Running the Full Application

To use the full application locally:

1. Start the FastAPI server on port 8000.
2. Start the Next.js app on port 3000.
3. Navigate through the salary, fuel efficiency, and loan prediction pages.

## Notes

The model files and demo pages are designed to provide a simple ML-powered web prediction experience. The API currently runs with permissive CORS settings and is configured for local development.
