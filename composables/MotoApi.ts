export const useMotoApi = () => {
  const manufacturer = ref("");
  const model = ref("");
  const shouldReset = ref(false);

  const motos = ref([]);
  const apiKey = "Srpk00NbahDC/8YxaLT6yQ==20HPS9HVhdI6rBcw";
  const headers = {
    "X-Api-Key": apiKey,
  };
  const isLoading = ref(false);

  async function getMotos() {
    const api = `https://api.api-ninjas.com/v1/motorcycles?make=${manufacturer.value}&model=${model.value}`;
    console.log("API INDEX ", api);
    isLoading.value = true;
    try {
      const response = await fetch(api, { headers });
      motos.value = await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      isLoading.value = false;
    }
  }

  // TODO: Fix this and make it work and refactor
  async function getMoto(api: string) {
    const response = await fetch(api, { headers });
    if (!response.ok) throw new Error("Could not load moto");
    return await response.json();
  }
  const motoInfo = ref(null);
  let apiMotoSingle = "";
  function modifyApi(api: string) {
    apiMotoSingle = api;
  }

  async function getMotoInfo() {
    try {
      const response = await fetch(apiMotoSingle, { headers });
      if (!response.ok) {
        throw new Error("Could not load moto");
      }
      motoInfo.value = await response.json();
    } catch (err) {
      console.log("ERROR: ", err);
    } finally {
      isLoading.value = false;
    }
  }

  function modifyManufacturer(newManufacturer: string) {
    manufacturer.value = newManufacturer;
  }

  function modifyModel(newModel: string) {
    model.value = newModel;
  }

  function modifyReset(newReset: boolean) {
    shouldReset.value = newReset;
  }

  return {
    isLoading,
    manufacturer,
    model,
    motos,
    shouldReset,
    getMotos,
    getMoto,
    modifyManufacturer,
    modifyModel,
    modifyReset,
  };
};
