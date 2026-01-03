export interface PredictionResponse {
  salary: number;
}

export interface PredictFormProps {
  onResult: (salary: number) => void;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}