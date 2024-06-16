import {
  Checkroom,
  DeveloperMode,
  FaceRetouchingNatural,
  FitnessCenter,
  GraphicEq,
  Home,
  LiveTv,
  OndemandVideo,
  School,
  SportsEsports,
  TheaterComedy,
  MusicNote,
} from "@mui/icons-material";

export const logo =
  "data:image/png;base64,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";
export const category = [
  { name: "New", icon: <Home /> },
  { name: "Movie", icon: <OndemandVideo /> },
  { name: "Live", icon: <LiveTv /> },
  { name: "Gaming", icon: <SportsEsports /> },
  { name: "Education", icon: <School /> },
  { name: "Sport", icon: <FitnessCenter /> },
  { name: "Comedy", icon: <TheaterComedy /> },
  { name: "Podcast", icon: <GraphicEq /> },
  { name: "Fashion", icon: <Checkroom /> },
  { name: "Crypto", icon: <DeveloperMode /> },
  { name: "Gym", icon: <FitnessCenter /> },
  { name: "Beauty", icon: <FaceRetouchingNatural /> },
  { name: "Music", icon: <MusicNote /> },
];
