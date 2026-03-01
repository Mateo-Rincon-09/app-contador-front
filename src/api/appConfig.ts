export const getEnvValue = (name: string) => {
    const result = process.env[name];
    if (result) return result;
    throw new Error(`The attribute with the name [${name}] was not found`);
};

export const API_ENDPOINT = getEnvValue("REACT_APP_API_ENDPOINT");
export const GOOGLE_MAP_API_KEY = getEnvValue("REACT_APP_GOOGLE_MAP_APIKEY");
export const REACT_APP_SERVER = getEnvValue("REACT_APP_SERVER");
export const REACT_APP_ENDPOINT = getEnvValue("REACT_APP_ENDPOINT");
export const WOMPI_PUBLIC_KEY = getEnvValue("REACT_APP_WOMPI_PUBLIC_KEY");
export const WOMPI_PRIVATE_KEY = getEnvValue("REACT_APP_WOMPI_PRIVATE_KEY");

export const WOMPI_PUBLIC_KEY_TEST = getEnvValue("REACT_APP_WOMPI_PUBLIC_KEY_TEST");
export const WOMPI_PRIVATE_KEY_TEST = getEnvValue("REACT_APP_WOMPI_PRIVATE_KEY_TEST");
export const IS_TEST_MODE = getEnvValue("REACT_APP_IS_TEST_MODE");

const VALUE_DEFAULT = {
    API_GATEWAY_ENDPOINT: API_ENDPOINT,
    // OCP_APIM_SUBSCRIPTION_KEY,
};

export default VALUE_DEFAULT;