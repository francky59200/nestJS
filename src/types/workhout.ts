export interface Checkpoint {
  distance: number;
  time: number;
  coordinates: {
    lat: number;
    lon: number;
  };
}

// Update the Workout interface
export interface Workout {
  id: string;
  totalKilometer: string;
  totalTime: string;
  timeKilometer: string;
  date: number;
  checkpoints: Checkpoint[]; // Change this to an array
}
