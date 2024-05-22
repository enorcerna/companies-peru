import {dataCompanies} from "@/utils/main";

export const prerender = true;

export const load = ({url}) => {
  const query = url.searchParams.get("q") ?? "";

  const filteredCompanies = dataCompanies().filter((company) =>
    company.memory.some((memory) => memory.year >= 2021)
  );

  const result =
    query.length > 0
      ? filteredCompanies.filter((company) =>
          company.companyName.includes(query.toLowerCase())
        )
      : filteredCompanies;

  return {
    values: result
  };
};
