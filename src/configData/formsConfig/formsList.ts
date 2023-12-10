const formsList = [
  {
    id: "f01",
    type: "Containment Liner & Stainless Steel Activities Surveillance",
    formTemplate: [
      {
        id: "f01_ft01",
        title: "Surveillance Observation Report",
        type: "Containment Liner & Stainless Steel Activities Surveillance",
        ref: "",
        status: "",
        location: "",
        createdDate: "",
        cratedBy: "",
        organizationName: "",
        statusChangedDate: "",
        expiryDate: "",
        action: "",
        template: [
          { title: "Document Ref", as: "textarea", content: { text: "" } },
          {
            title: "Revision of Checklist",
            as: "textarea",
            content: { text: "" },
          },
          { title: "Form Title", as: "textarea", content: { text: "" } },
          { title: "Details", as: "textarea", content: { text: "" } },
          { title: "Location", as: "textarea", content: { text: "" } },
          { title: "Expiry Data", as: "textarea", content: { text: "" } },
          {
            title: "Signature Date",
            as: "input",
            type: "date",
            content: { text: "" },
          },
          {
            title: "Signature",
            as: "input",
            type: "text",
            content: { text: "" },
          },
        ],
      },
    ],
  },
  {
    id: "f02",
    type: "Drainage, Ducting, Pipework & Other Services",
    formTemplate: [
      { id: "f02_ft01", title: "Drainage As Built Schedule" },
      { id: "f02_ft02", title: "Checklist - Underground Services" },
      { id: "f02_ft03", title: "Drainage Chamber Inspection Sheet" },
      {
        id: "f02_ft04",
        title: "Drainage Gully, Rodding Eye and Branchline Checksheet",
      },
      { id: "f02_ft05", title: "Drainage Run Checksheet" },
    ],
  },
  {
    id: "f03",
    type: "Earthing",
    formTemplate: [
      {
        id: "f03_ft01",
        title:
          "Earthing Ground Floor Steelwork Connection to Basement Continuity",
      },
      {
        id: "f03_ft02",
        title:
          "Earthing OCS Halfen Channel Intermediate Level to Basement Continuity",
      },
      {
        id: "f03_ft04",
        title: "Earthing Pile and Electrode Resistance Test Record",
      },
      { id: "f03_ft05", title: "Earthing-Underground Checklist" },
    ],
  },
  {
    id: "f04",
    type: "Earthworks",
    formTemplate: [
      { id: "f04_ft01", title: "Expanded Shear Vane Test Form" },
      { id: "f04_ft02", title: "Earthworks Surveillance Record Template" },
    ],
  },
  {
    id: "f05",
    type: "Insitu Concrete",
    formTemplate: [
      {
        id: "f05_ft01",
        title: "Drilling and Resin Fixing Checksheet Template",
      },
      { id: "f05_ft02", title: "D-Wall Cleanliness Checksheet" },
      { id: "f05_ft03", title: "D-Wall Vac Ex Checksheet Template" },
      { id: "f05_ft04", title: "Holding Down Bolts Inspection Record" },
      { id: "f05_ft05", title: "Post Pour Concrete Checksheet Template" },
      { id: "f05_ft06", title: "Pour History Checksheet Template" },
      { id: "f05_ft07", title: "Pre Pour Concrete Checksheet" },
      { id: "f05_ft08", title: "Structural Concrete Pour Record Template" },
      { id: "f05_ft09", title: "Blinding Concrete Checklist" },
    ],
  },
  {
    id: "f06",
    type: "Instrument Checks",
    formTemplate: [
      { id: "f06_ft01", title: "Autolevel Weekly Checksheet" },
      { id: "f06_ft02", title: "Plumb Laser Weekly Checksheet" },
      { id: "f06_ft03", title: "Rotating Laser Checksheet" },
      { id: "f06_ft04", title: "Total Station Checklist" },
    ],
  },
  {
    id: "f07",
    type: "Plant and Logistics",
    formTemplate: [{ id: "f07_ft01", title: "Plant Off Hire" }],
  },
  {
    id: "f08",
    type: "Permits",
    formTemplate: [
      {
        id: "f08_ft01",
        title: "Mobile Concrete Pump Mobilisation Permit",
      },
      { id: "f08_ft02", title: "Hot Works Permit" },
      { id: "f08_ft03", title: "Excavate/Dig/Penetrate Ground Permit" },
      { id: "f08_ft04", title: "Permit to Load" },
      {
        id: "f08_ft05",
        title: "Permit to Unload",
        template: [
          { title: "Document Ref", as: "textarea" },
          { title: "Revision of Checklist", as: "textarea" },
          { title: "Form Title", as: "textarea" },
          { title: "Details", as: "textarea" },
          { title: "Loacation", as: "textarea" },
          { title: "Permit Number", as: "textarea" },
          { title: "Expiry Data", as: "textarea" },
          {
            title: "Temporary Works Item Descriptiontype",
            as: "textarea",
          },
          { title: "Signature Date", as: "input", type: "date" },
          { title: "Signature", as: "input", type: "text" },
        ],
      },
    ],
  },
  {
    id: "f09",
    type: "Precast",
    formTemplate: [{ id: "f09_ft01", title: "Precast Delivery" }],
  },
  {
    id: "f10",
    type: "Progress",
    formTemplate: [{ id: "f10_ft01", title: "General Inspection Form" }],
  },
  {
    id: "f11",
    type: "Quality checks",
    formTemplate: [
      { id: "f11_ft01", title: "Weekly Site Quality Inspection Report" },
      { id: "f11_f02", title: "NCR - Nonconformity Record" },
      { id: "f11_f03", title: "NCR - Nonconformity Record: ITP Version" },
    ],
  },
  {
    id: "f12",
    type: "SHE Forms",
    formTemplate: [
      {
        id: "f12_ft01",
        title: "Edge Protection - Weekly Inspection Record Sheet",
      },
      {
        id: "f12_ft02",
        title: "Hole Protection - Weekly Inspection Record Sheet",
      },
    ],
  },

  {
    id: "f13",
    type: "Temporary Works",
    formTemplate: [
      { id: "f13_ft01", title: "Checklists - Hoarding and Gate Posts" },
      {
        id: "f13_ft02",
        title:
          "Expanded Lifting of Prefabricated Reinforcement Cages Checksheet ",
      },
      { id: "f13_ft03", title: "Post Excavation Surface CheckSheet" },
      { id: "f13_ft04", title: "Daily Excavation Inspection Report" },
      { id: "f13_ft05", title: "Excavation Inspection Report" },
      { id: "f13_ft06", title: "Formwork" },
      { id: "f13_ft07", title: "Propping Systems" },
      { id: "f13_ft08", title: "Supported Excavations & Sheetpiles" },
      {
        id: "f13_ft09",
        title:
          "Temporary Works - Working Platforms for Tracked Plant Checksheet",
      },
      { id: "f13_ft10", title: "Temporary Works Guidance" },
      {
        id: "f13_ft11",
        title: "Temporary Works Inspection - Deck Control Checksheet",
      },
      {
        id: "f13_ft12",
        title: "Temporary Works Inspection - Falsework Checksheet",
      },
      {
        id: "f13_ft13",
        title: "Temporary Works Inspection - Foundations, Bearing Piles",
      },
      {
        id: "f13_ft14",
        title: "Temporary Works Inspection - Panel Bridge/Mabey/Equivalent",
      },
      { id: "f13_ft15", title: "Post Tension Ties Weekly Inspection" },
      { id: "f13_ft16", title: "Scaffold Register - DP/IS" },
    ],
  },
  {
    id: "f14",
    type: "Waterproofing",
    formTemplate: [
      { id: "f14_ft01", title: "Waterproofing Ext Faces of HH & CB" },
      {
        id: "f14_ft02",
        title: "Waterproofing Site Wide to Base Slabs Checksheet",
      },
      {
        id: "f14_ft03",
        title: "Waterproofing to Base Slabs & East Pumping Chamber Checklist",
      },
      {
        id: "f14_ft04",
        title: "Waterproofing to Capping Beams and Retaining Walls Checklist",
      },
      {
        id: "f14_ft05",
        title: "Waterproofing to Underground Roof Slabs & SBS Trench Checklist",
      },
    ],
  },
];
export default formsList;
