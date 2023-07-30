import React from "react";
import "./contact.css";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent ";

const Branches = () => {
  const jsonData = [
    {
      title: "CHAK #224 RO PLANT",
      location: "BILAL PARK COAL GROUND",
      system: "R.O PLANT"
    },
    {
      title: "BATALA COLONY POLICE STATION",
      location: "OPPST. PHARI GROUND",
      system: "R.O PLANT"
    },
    {
      title: "BILAL PARK COAL GROUND",
      location: "SAMNABAD",
      system: "R.O PLANT"
    },
    {
      title: "BATALA COLONY POLICE STATION",
      location: "OPPST. PHARI GROUND",
      system: "R.O PLANT"
    },
    {
      title: "BARA QABRSTAN RO PLANT",
      location: "MALIK PARK NEAR BARA QABRSTAN",
      system: "R.O PLANT"
    },
    {
      title: "AYUB COLONY RO PLANT BY M.C.F",
      location: "AYUB COLONY RO PLANT BY M.C.F",
      system: "PINJRA"
    },
    {
      title: "ALLAMA IQBAL COLONY RO PLANT",
      location: "NEAR SAMUNDRI ROAD",
      system: "R.O PLANT"
    },
    {
      title: "279 KURD RO PLANT BY M.C.F",
      location: "KALEEM SHAHEED ROAD",
      system: "PINJRA"
    },
    {
      title: "MODEL CITY",
      location: "CANAL ROAD",
      system: "R.O PLANT"
    },
    {
      title: "ISMAEEL VELLY",
      location: "DAEWOO ROAD",
      system: "R.O PLANT"
    },
    {
      title: "LASANI GARDEN",
      location: "DAEWOO ROAD",
      system: "R.O PLANT"
    },
    {
        title: "CHAK #224 RO PLANT",
        location: "BILAL PARK COAL GROUND",
        system: "R.O PLANT"
      },
      {
        title: "CHAK #224 RO PLANT",
        location: "BILAL PARK COAL GROUND",
        system: "R.O PLANT"
      },
      {
        title: "CHAK #224 RO PLANT",
        location: "BILAL PARK COAL GROUND",
        system: "R.O PLANT"
      },
      {
        title: "CHAK #224 RO PLANT",
        location: "BILAL PARK COAL GROUND",
        system: "R.O PLANT"
      },
      {
        title: "CHAK #224 RO PLANT",
        location: "BILAL PARK COAL GROUND",
        system: "R.O PLANT"
      },
      {
        title: "CHAK #224 RO PLANT",
        location: "BILAL PARK COAL GROUND",
        system: "R.O PLANT"
      },
      {
        title: "CHAK #224 RO PLANT",
        location: "BILAL PARK COAL GROUND",
        system: "R.O PLANT"
      },


  ];
  return (
    <section>
      <div className="contact_banner branchesBackground">
        <button className="secondarybtn">Branches</button>
      </div>
      <div className="branches_container">
        <PaginationComponent data={jsonData} itemsPerPage={4} />
      </div>
    </section>
  );
};

export default Branches;
