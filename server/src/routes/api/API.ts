export const  searchMuseJobs = async (location: string, industry: string, experience: string) => {

  if(location){
    
  }

  if(industry){

  }

  if(experience){
  }

  let data = await fetch(`https://www.themuse.com/api/public/jobs?location=United%20States&page=1`);

  console.log("data")
  console.log(data)

  return fetch(`https://www.themuse.com/api/public/jobs?location=United%20States&page=1`);
};


// https://www.themuse.com/api/public/jobs?level=Entry%20Level&level=Mid%20Level&level=Senior%20Level&level=management&level=Internship&location=United%20States&page=1


// https://www.themuse.com/api/public/jobs?level=Entry%20Level&level=Mid%20Level&level=Senior%20Level&level=management&level=Internship&location=Minneapolis%2C%20MN&page=1


// https://www.themuse.com/api/public/jobs?location=Minneapolis%2C%20MN&page=1

// https://www.themuse.com/api/public/jobs?category=IT&page=1