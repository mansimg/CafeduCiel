function findLocation(){
  var directory = ["Los Angeles: 1450-B 3rd Street Promenade, Santa Monica, CA 90401",
                  "San Francisco: 40 Grant Ave, San Francisco, CA 94133",
                  "New York: 690 Madison Ave, New York, NY 10065",
                  "Dallas: 1400 Elm St #3750, Dallas, TX 75202",
                  "Chicago: 520 N Clark St, Chicago, IL 60654",
                  "Miami: 1720 NW 20th St, Miami, FL 33142",
                  "Seattle: 1400 1st Ave, Seattle, WA 98101",
                  "Washington DC: 1601 14th St NW, Washington, DC 20009"];

  var zip = parseInt(document.getElementById("ziplocator").value);

  location.replace("location.html");
  
  // var locationAddress = document.getElementById("address")
  if(zip > 00000 && zip < 99999){
    if(zip >= 00000 && zip < 12500){
      alert("Your nearest location is located in New York. The address is \n" + directory[2]);
    }
    else if(zip >= 12500 && zip < 25000){
      alert("Your nearest location is located in Washington DC. The address is \n" + directory[7]);
    }
    else if(zip >= 25000 && zip < 40000){
      alert("Your nearest location is located in Miami. The address is \n" + directory[5]);
    }
    else if(zip >= 40000 && zip < 65000){
      alert("Your nearest location is located in Chicago. The address is \n" + directory[4]);
    }
    else if(zip >= 65000 && zip < 85000){
      alert("Your nearest location is located in Dallas. The address is \n" + directory[3]);
    }
    else if (zip >= 85000 && zip < 92500){
      alert("Your nearest location is located in Los Angeles. The address is \n" + directory[0
      ]);
    }
    else if (zip >= 92500 && zip < 97000){
      alert("Your nearest location is located in San Francisco. The address is \n" + directory[1
      ]);
    }
    else if (zip >= 97000 && zip < 99999){
      alert("Your nearest location is located in Seattle. The address is \n" + directory[6
      ]);
    }
  }
}
