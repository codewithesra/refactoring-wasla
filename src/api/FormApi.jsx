import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      console.log("testing how many times the api gets called");
      const res = await axios.get(
        "https://restcountries.com/v3.1/all?fields=nae,cca2"
      );
      return res.data.map((country) => ({
        label: country.name.common,
        value: country.name.common,
      }));
    },
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60 * 24,
    retry: 2,
  });
};
