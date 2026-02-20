export function nameTransform(name) {
  let transformName = name
    .replace(/\s+/g, "_")             
    .normalize("NFD")                  
    .replace(/[\u0300-\u036f]/g, "")   
    .toLowerCase();                    

  return transformName;
}