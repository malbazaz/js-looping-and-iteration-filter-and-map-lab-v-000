// Code your solution here:
function driversWithRevenueOver(driver, revenue){
return driver.filter(function(d){
  return d.revenue > revenue;
})
}

function driverNamesWithRevenueOver(driver, revenue){
  return driver.filter(function(d){
    return d.revenue > revenue;
    }
  })
  return driver.map(function(d){
  return  d.name
  })
}
