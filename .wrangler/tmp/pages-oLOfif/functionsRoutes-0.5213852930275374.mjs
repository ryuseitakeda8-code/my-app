import { onRequestPost as __api_generate_js_onRequestPost } from "C:\\Users\\ryuus\\my-app\\functions\\api\\generate.js"
import { onRequest as __api_hello_js_onRequest } from "C:\\Users\\ryuus\\my-app\\functions\\api\\hello.js"

export const routes = [
    {
      routePath: "/api/generate",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_generate_js_onRequestPost],
    },
  {
      routePath: "/api/hello",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_hello_js_onRequest],
    },
  ]