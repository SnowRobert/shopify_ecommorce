import{r as a,j as L}from"./index.23a55361.js";import{l as b}from"./1986dff3.js";function P(t,o){const[i,r]=a.exports.useState("loading"),n=JSON.stringify(o);return a.exports.useEffect(()=>{async function s(){try{r("loading"),await b(t,o),r("done")}catch{r("error")}}s()},[t,n,o]),i}function S(t){var l,c,m,u,p,v,f,g;const[o,i]=a.exports.useState(void 0),r=a.exports.useCallback(E=>{i(E)},[]),{data:n,id:s=n.id,children:d,className:y,...e}=t,h=P("https://unpkg.com/@google/model-viewer@v1.8.0/dist/model-viewer.min.js",{module:!0});if(a.exports.useEffect(()=>{if(o!=null)return e.onError&&o.addEventListener("error",e.onError),e.onLoad&&o.addEventListener("load",e.onLoad),e.onPreload&&o.addEventListener("preload",e.onPreload),e.onModelVisibility&&o.addEventListener("model-visibility",e.onModelVisibility),e.onProgress&&o.addEventListener("progress",e.onProgress),e.onArStatus&&o.addEventListener("ar-status",e.onArStatus),e.onArTracking&&o.addEventListener("ar-tracking",e.onArTracking),e.onQuickLookButtonTapped&&o.addEventListener("quick-look-button-tapped",e.onQuickLookButtonTapped),e.onCameraChange&&o.addEventListener("camera-change",e.onCameraChange),e.onEnvironmentChange&&o.addEventListener("environment-change",e.onEnvironmentChange),e.onPlay&&o.addEventListener("play",e.onPlay),e.onPause&&o.addEventListener("ar-status",e.onPause),e.onSceneGraphReady&&o.addEventListener("scene-graph-ready",e.onSceneGraphReady),()=>{o!=null&&(e.onError&&o.removeEventListener("error",e.onError),e.onLoad&&o.removeEventListener("load",e.onLoad),e.onPreload&&o.removeEventListener("preload",e.onPreload),e.onModelVisibility&&o.removeEventListener("model-visibility",e.onModelVisibility),e.onProgress&&o.removeEventListener("progress",e.onProgress),e.onArStatus&&o.removeEventListener("ar-status",e.onArStatus),e.onArTracking&&o.removeEventListener("ar-tracking",e.onArTracking),e.onQuickLookButtonTapped&&o.removeEventListener("quick-look-button-tapped",e.onQuickLookButtonTapped),e.onCameraChange&&o.removeEventListener("camera-change",e.onCameraChange),e.onEnvironmentChange&&o.removeEventListener("environment-change",e.onEnvironmentChange),e.onPlay&&o.removeEventListener("play",e.onPlay),e.onPause&&o.removeEventListener("ar-status",e.onPause),e.onSceneGraphReady&&o.removeEventListener("scene-graph-ready",e.onSceneGraphReady))}},[o,e.onArStatus,e.onArTracking,e.onCameraChange,e.onEnvironmentChange,e.onError,e.onLoad,e.onModelVisibility,e.onPause,e.onPlay,e.onPreload,e.onProgress,e.onQuickLookButtonTapped,e.onSceneGraphReady]),h!=="done")return null;if(!((c=(l=n.sources)==null?void 0:l[0])!=null&&c.url))throw new Error("<ModelViewer/> requires 'data.sources' prop to be an array, with an object that has a property 'url' on it");return n.alt||console.warn("<ModelViewer/> requires the 'data.alt' prop for accessibility"),L("model-viewer",{ref:r,...e,class:y,id:s,src:n.sources[0].url,alt:n.alt,"camera-controls":(m=e.cameraControls)!=null?m:!0,poster:e.poster||((u=n.previewImage)==null?void 0:u.url),autoplay:(p=e.autoplay)!=null?p:!0,loading:e.loading,reveal:e.reveal,ar:e.ar,"ar-modes":e.arModes,"ar-scale":e.arScale,"ar-placement":e.arPlacement,"ios-src":e.iosSrc,"touch-action":e.touchAction,"disable-zoom":e.disableZoom,"orbit-sensitivity":e.orbitSensitivity,"auto-rotate":e.autoRotate,"auto-rotate-delay":e.autoRotateDelay,"rotation-per-second":e.rotationPerSecond,"interaction-policy":e.interactionPolicy,"interaction-prompt":e.interactionPrompt,"interaction-prompt-style":e.interactionPromptStyle,"interaction-prompt-threshold":e.interactionPromptThreshold,"camera-orbit":e.cameraOrbit,"camera-target":e.cameraTarget,"field-of-view":e.fieldOfView,"max-camera-orbit":e.maxCameraOrbit,"min-camera-orbit":e.minCameraOrbit,"max-field-of-view":e.maxFieldOfView,"min-field-of-view":e.minFieldOfView,bounds:e.bounds,"interpolation-decay":(v=e.interpolationDecay)!=null?v:100,"skybox-image":e.skyboxImage,"environment-image":e.environmentImage,exposure:e.exposure,"shadow-intensity":(f=e.shadowIntensity)!=null?f:0,"shadow-softness":(g=e.shadowSoftness)!=null?g:0,"animation-name":e.animationName,"animation-crossfade-duration":e.animationCrossfadeDuration,"variant-name":e.variantName,orientation:e.orientation,scale:e.scale,children:d})}export{S as ModelViewer};
//# sourceMappingURL=5bef411b.js.map
