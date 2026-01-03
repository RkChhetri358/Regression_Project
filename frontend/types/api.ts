export interface PredictionResponse {
  salary: number;
}

export interface PredictFormProps {
  onResult: (salary: number) => void;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}

export interface LoanResponse {
  status: 'Approved' | 'Rejected';
}

export interface LoanInput {
  score: number;
  income: number;
  employed: number; // 1 for Yes, 0 for No
}