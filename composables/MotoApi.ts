export const useMotoApi = () => {
  const manufacturer = ref("");
  const model = ref("");
  const shouldReset = ref(false);
  const showError = ref(false)

  const motos = ref([]);
  // API
  const apiKey = "Srpk00NbahDC/8YxaLT6yQ==20HPS9HVhdI6rBcw";
  const headers = {
    "X-Api-Key": apiKey,
  };
  const isLoading = ref(false);
  // Get all
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
  // Get single moto
  function getMoto(api: string) {
    const { data, pending, error } = useAsyncData(api, () =>
      $fetch(api, { headers })
    );
    return { data, pending, error };
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

  function modifyShowError(newBool: boolean) {
    showError.value = newBool
  }

  return {
    isLoading,
    manufacturer,
    model,
    motos,
    shouldReset,
    showError,
    getMotos,
    getMoto,
    modifyManufacturer,
    modifyModel,
    modifyReset,
    modifyShowError
  };
};
