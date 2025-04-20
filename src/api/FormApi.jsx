import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      console.log("testing how many times the api gets called");
      const res = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,cca2"
      );
      return res.data.map((country) => ({
        label: country.name.common,
        value: country.name.common,
      }));
    },
    retry: 2,
  });
};

export const useSkills = () => {
  const skillsKey = import.meta.env.VITE_SKILLS_API_KEY;
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      console.log("fetching skills");
      const res = await axios.get(
        "https://api.apilayer.com/skills?q=development",
        {
          headers: {
            apikey: skillsKey,
          },
        }
      );
      return res.data.map((skill) => ({
        label: skill,
        value: skill,
      }));
    },
    retry: 2,
  });
};

export const submitFormData = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
};
