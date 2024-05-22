import {toast} from "svelte-sonner";
import data from "@/data/company_data.json";
const handleCopy = (tex: string) => {
  navigator.clipboard.writeText(tex);
  toast.success("Copiado!!", {
    description: tex
  });
};
const dataCompanies = () => {
  return data.map(({companyCode, memory, companyName, sectorDescription}) => {
    return {
      companyCode,
      memory,
      sectorDescription,
      companyName: companyName.toLowerCase()
    };
  });
};
export {handleCopy, dataCompanies};
