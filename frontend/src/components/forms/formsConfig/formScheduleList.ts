const formsScheduleList = [
  {
    id: "	fs01	",
    type: "Containment Liner & Stainless Steel Activities Surveillance",
    formTemplate: [
      { id: "fs01_ft01", title: "BYLOR - Surveillance Observation Report" },
    ],
  },
  {
    id: "	fs02	",
    type: "Drainage,Ducting,Pipework&OtherServices",
    formTemplate: [
      { id: "fs02_ft01", title: "Checklist - Underground Services" },
      { id: "fs02_ft02", title: "Drainage Chamber Inspection Sheet" },
      {
        id: "fs02_ft03",
        title: "Drainage Gully, Rodding Eye and Branchline Checksheet",
      },
      { id: "fs02_ft04", title: "Drainage Run Checksheet" },
      { id: "fs02_ft05", title: "Base Slab Drainage Checksheet" },
    ],
  },
  {
    id: "	fs03	",
    type: "Earthing",
    formTemplate: [
      {
        id: "fs03_ft01",
        title:
          "Earthing Ground Floor Steelwork Connection to Basement Continuity",
      },
      {
        id: "fs03_ft02",
        title:
          "Earthing OCS Halfen Channel Intermediate Level to Basement Continuity",
      },
      {
        id: "fs03_ft03",
        title: "Earthing Pile and Electrode Resistance Test Results",
      },
      { id: "fs03_ft04", title: "Earthing-Underground Checklist Template" },
    ],
  },
  {
    id: "	fs04	",
    type: "Earthworks",
    formTemplate: [
      { id: "fs04_ft01", title: "Shear Vane Test Form" },
      { id: "fs04_ft02", title: "Earthworks Surveillance Record Template" },
    ],
  },
  {
    id: "	fs05	",
    type: "InsituConcrete",
    formTemplate: [
      {
        id: "fs05_ft01",
        title: "Drilling and Resin Fixing Checksheet Template",
      },
      { id: "fs05_ft02", title: "D-Wall Cleanliness Checksheet" },
      { id: "fs05_ft03", title: "D-Wall Vac Ex Checksheet Template" },
      { id: "fs05_ft04", title: "Holding Down Bolts Inspection Record" },
      { id: "fs05_ft05", title: "Post Pour Concrete Checksheet Template" },
      { id: "fs05_ft06", title: "Pour History Checksheet Template" },
      { id: "fs05_ft07", title: "Pre Pour Concrete Checksheet" },
      { id: "fs05_ft08", title: "Structural Concrete Pour Record Template" },
      { id: "fs05_ft09", title: "Blinding Concrete Checklist" },
    ],
  },
  {
    id: "	fs06	",
    type: "InstrumentChecks",
    formTemplate: [
      { id: "fs06_ft01", title: "Autolevel Weekly Checksheet" },
      { id: "fs06_ft02", title: "Plumb Laser Weekly Checksheet" },
      { id: "fs06_ft03", title: "Rotating Laser Checksheet" },
      { id: "fs06_ft04", title: "Total Station Checklist" },
    ],
  },
  {
    id: "	fs07	",
    type: "Other",
    formTemplate: [
      { id: "fs07_ft01", title: "Blinding Concrete Checklist" },
      { id: "fs07_ft02", title: "Drainage As Built Schedule" },
      { id: "fs07_ft03", title: "Plant Off Hire" },
    ],
  },
  {
    id: "	fs08	",
    type: "Permits",
    formTemplate: [
      {
        id: "fs08_ft01",
        title: "Mobile Concrete Pump Mobilisation Permit Form",
      },
      { id: "fs08_ft02", title: "Hot Works Permit" },
      { id: "fs08_ft03", title: "Permit to Excavate/Dig/Penetrate Ground" },
      { id: "fs08_ft04", title: "Permit to Excavate/Dig/Penetrate Ground" },
    ],
  },
  {
    id: "	fs09	",
    type: "Precast",
    formTemplate: [{ id: "fs09_ft01", title: "Precast Delivery" }],
  },
  {
    id: "	fs10	",
    type: "Progress",
    formTemplate: [{ id: "fs10_ft01", title: "General Inspection Form" }],
  },
  {
    id: "	fs11	",
    type: "Qualitychecks",
    formTemplate: [
      { id: "fs11_ft01", title: "Weekly Site Quality Inspection Report" },
      { id: "fs11_ft02", title: "NCR - Nonconformity Record" },
      { id: "fs11_ft03", title: "NCR - Nonconformity Record: ITP Version" },
    ],
  },
  {
    id: "	fs12	",
    type: "SHEForms",
    formTemplate: [
      {
        id: "fs12_ft01",
        title: "Edge Protection - Weekly Inspection Record Sheet",
      },
      {
        id: "fs12_ft02",
        title: "Hole Protection - Weekly Inspection Record Sheet",
      },
    ],
  },

  {
    id: "	fs13	",
    type: "TemporaryWorks",
    formTemplate: [
      { id: "fs13_ft01", title: "Checklists - Hoarding and Gate Posts" },
      {
        id: "fs13_ft02",
        title: "Lifting of Prefabricated Reinforcement Cages Checksheet ",
      },
      { id: "fs13_ft03", title: "Post Excavation Surface CheckSheet" },
      { id: "fs13_ft04", title: "Daily Excavation Inspection Report" },
      { id: "fs13_ft05", title: "Excavation Inspection Report" },
      { id: "fs13_ft06", title: "Formwork" },
      { id: "fs13_ft07", title: "Propping Systems" },
      { id: "fs13_ft08", title: "Supported Excavations & Sheetpiles" },
      {
        id: "fs13_ft09",
        title:
          "Temporary Works - Working Platforms for Tracked Plant Checksheet",
      },
      { id: "fs13_ft10", title: "Temporary Works Guidance" },
      {
        id: "fs13_ft11",
        title: "Temporary Works Inspection - Deck Control Checksheet",
      },
      {
        id: "fs13_ft12",
        title: "Temporary Works Inspection - Falsework Checksheet",
      },
      {
        id: "fs3_ft13",
        title: "Temporary Works Inspection - Foundations, Bearing Piles",
      },
      {
        id: "fs13_ft14",
        title: "Temporary Works Inspection - Panel Bridge/Mabey/Equivalent",
      },
      { id: "fs3_ft15", title: "Post Tension Ties Weekly Inspection" },
      { id: "fs13_ft16", title: "Scaffold Register - DP/IS" },
    ],
  },

  {
    id: "	fs15	",
    type: "Waterproofing",
    formTemplate: [
      { id: "fs14_ft01", title: "Waterproofing Ext Faces of HH & CB" },
      {
        id: "fs14_ft02",
        title: "Waterproofing Site Wide to Base Slabs Checksheet",
      },
      {
        id: "fs14_ft03",
        title: "Waterproofing to Base Slabs & East Pumping Chamber Checklist",
      },
      {
        id: "fs14_ft04",
        title: "Waterproofing to Capping Beams and Retaining Walls Checklist",
      },
      {
        id: "fs14_ft05",
        title: "Waterproofing to Underground Roof Slabs & SBS Trench Checklist",
      },
    ],
  },
  {
    id: "	fs15	",
    type: "Superseded",
    formTemplate: [
      { id: "fs15_ft01", title: "Instrument Calibration Test Record" },
    ],
  },
];
export default formsScheduleList;
