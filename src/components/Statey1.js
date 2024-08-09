import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://uhhueyrgffyxinaqihzm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoaHVleXJnZmZ5eGluYXFpaHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwNjEwMjIsImV4cCI6MjAzODYzNzAyMn0.fym8kDcGfMiDx2hcI-yxzrZQzsnk342A-9XDsPP_b3A");

const Statey1 = () => {
  const [art, setArt] = useState(1);
  const [siblingsNum, setSiblingsNum] = useState(1);

  useEffect(() => {
    // Fetch initial counter values from the database
    getCounters();
  }, []);

  const getCounters = async () => {
    const { data } = await supabase.from("counters").select().single();
    if (data) {
      setArt(data.counter_1);
      setSiblingsNum(data.counter_2);
    }
  };

 
  const updateCounters = async (newArt, newSiblingsNum) => {
    await supabase
      .from("counters")
      .update({ counter_1: newArt, counter_2: newSiblingsNum })
      .eq('id', 1); // Assuming there's only one row with id 1
  };
   
  const handleArt = () => {
    const newArt = art + 1;
    setArt(newArt);
    updateCounters(newArt, siblingsNum);
  };

  const handleSiblingsNum = () => {
    const newSiblingsNum = siblingsNum + 1;
    setSiblingsNum(newSiblingsNum);
    updateCounters(art, newSiblingsNum);
  };

  return (
    <div>
      <p>I think this website is art: {art} </p>
      <div>
        <button onClick={handleArt}>Art + 1</button>
      </div>
      <p>I think this site is chill {siblingsNum} </p>
      <div>
        <button onClick={handleSiblingsNum}>Cool + 1</button>
      </div>
    </div>
  );
};

export default Statey1;
