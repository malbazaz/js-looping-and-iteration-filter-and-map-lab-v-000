// Code your solution here:
function driversWithRevenueOver(driver, revenue){
return driver.filter(function(d){
  return d.revenue > revenue;
})
}

function driverNamesWithRevenueOver(driver, revenue){
  driver.filter(function(d){
   d.revenue > revenue;
 })
  return driver.map(function(d){
  return  d.name
  })
}
