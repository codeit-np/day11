export const upcoming = async () => {
  try {
    const response = await fetch("https://codeit.com.np/api/popular-courses");
    if (response.status == 200) {
      const upcoming = await response.json();
      console.log(upcoming);
    }
  } catch (e) {
    console.log(e.error);
  } finally {
    console.log("good job");
  }
};
