// Code your solution here:
function driversWithRevenueOver(driver, revenue){
return driver.filter(function(d){
  return d.revenue > revenue;
})
}

function driverNamesWithRevenueOver(driver, revenue){
  const driver1 = driver.filter(function(d){
   return d.revenue > revenue;
 })
  return driver1.map(function(d){
  return  d.name
  })
}

function exactMatch(driver,object1){
  return driver.filter(function(d){
    for (const key in object1){
      for(const keyd in d){}
        return object1[key] === d[keyd];
      }
    }
  })
}
