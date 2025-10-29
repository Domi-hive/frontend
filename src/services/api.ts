const API_BASE_URL = 'https://s-dev.domihive.com';

export interface ApiRequest {
  title: string;
  propertyType: string;
  location: string;
  budgetRange: string;
  bedrooms: number;
  bathrooms: number;
  preferredInspectionDate: string;
}

export interface CreateRequestData {
  location: string;
  propertyType: string;
  priceRange: number[];
  bedrooms: string;
  tenure: string;
  furnishing?: string;
  propertyStructure?: string;
  locationType?: string;
  moveInDate?: string;
  additionalInfo?: string;
}

export const apiService = {
  async getRequests(): Promise<ApiRequest[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/requests`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching requests:', error);
      throw error;
    }
  },

  async createRequest(requestData: CreateRequestData): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${API_BASE_URL}/requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating request:', error);
      throw error;
    }
  },
};