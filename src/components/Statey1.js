import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";




const supabaseUrl = import.meta.env.React_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.React_SUPABASE_ANON_KEY;
console.log("hello world!");
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
