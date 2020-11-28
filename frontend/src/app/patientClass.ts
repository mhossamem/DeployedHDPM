export class PatientObj { 

    PatientObj()
    {
        this.fullName = "";
        this.fullNameAr = "";
        this.Height = new Number;
        this.bldGrp = "";
        this.kAllergies = "";
        this.Hospital = "";
        this.contactInfo = new Number;
        this.Gender = "";
        this.n_ID = "";
        this.Nationality = "";
        this.submittedBy = "";
        this.dosDialysis = "";
        this.oKidneyDisease = "";
        this.otherKD = "";
        this.surgHist1 = "";
        this.surgHist2 = "";
        this.morbHype = false;
        this.morbDM = false;
        this.morbIHD = false;
        this.morbEpi = false;
        this.coMorbOther = "";
        this.previousTr = "";
        this.prevTrGS = "";
        this.fitForTr = "";
        this.fitForTrReason = "";
        this.potentialRDonors = "";
        this.currentAccess1 = "";
        this.currentAccess2 = "";
        this.currentAccess3 = "";
        this.dOfAccessCreation = "";
        this.compInsuf = false;
        this.compInf = false;
        this.compAD = false;
        this.compDC = false;
        this.compOther = "";
        this.previousAccess1 = "";
        this.previousAccess2 = "";
        this.previousAccess3 = "";
        this.previousAccess4 = "";
        this.Frequency = new Number;
        this.Duration = new Number;
        this.Dialyser = "";
        this.antiCoagulation = "";
        this.hInit = "";
        this.hMaint = "";
        this.LMWHval = "";
        this.antiCoReason = "";
        this.dryWt = new Number;
        this.avgWtGain = new Number;
        this.avgBP = new Number;
        this.avgPulse = new Number;
        this.dialAdeq = "";
        this.dCompHead = false;
        this.dCompHG = false;
        this.dCompHOT = false;
        this.dCompHET = false; 
        this.dCompMC = false;
        this.dCompAC = false;
        this.dCompVom = false;
        this.dCompSZ = false;
        this.dCompHS = false;
        this.dCompIt = false;
        this.dCompOther = "";
        this.labDate = "";
        this.cbcHB = new Number;
        this.cbcWBC = new Number;
        this.cbcPlatelets = new Number;
        this.chemCre = new Number;
        this.chemUrea = new Number;
        this.chemSod = new Number;
        this.chemPot = new Number;
        this.chemCal = new Number;
        this.chemPhos = new Number;
        this.chemAST = new Number;
        this.chemALT = new Number;
        this.chemAlb = new Number;
        this.chemMag = new Number;
        this.chemAlph = new Number;
        this.chemOther = "";
        this.Siron = new Number;
        this.TIBC = new Number;
        this.Sferitin = new Number;
        this.hormPTH = new Number;
        this.hormVITD = new Number;
        this.hormOther = "";
        this.hbsAg = "";
        this.hcvAb = "";
        this.hivI_II = "";
        this.othrSer = "";
        this.coagPT  = new Number;
        this.coagPPT  = new Number;
        this.coagINR = new Number;
        this.cMD1 = "";
        this.cMD2 = "";
        this.cMD3 = "";
        this.cMD4 = "";
        this.cMD5 = "";
        this.cMD6 = "";
        this.cMD7 = "";
        this.cMD8 = "";
        this.cMD9 = "";
        this.cMD10 = "";
        this.cMD11 = "";
        this.cMD12 = "";
        this.cMD13 = "";
        this.cMD14 = "";
        this.cMD15 = "";
        this.cMD16 = "";
        this.HepBV = "";
        this.HepBVDate = "";
        this.InfV = "";
        this.InfVDate = "";
        this.otherVAC = "";
        this.progNotes = "";
        this.consNotes = "";
    }


    
    fullName: String;
    fullNameAr: String;
    Age: Number;
    Height:Number;
    bldGrp: String;
    kAllergies: String;
    Hospital: String;
    contactInfo: Number;
    Gender: String;
    n_ID: String;
    Nationality: String;
    submittedBy: String;
    dosDialysis: String;
    oKidneyDisease: String;
    otherKD: String;
    surgHist1: String;
    surgHist2: String;
    morbHype: boolean;
    morbDM: boolean;
    morbIHD: boolean;
    morbEpi: boolean;
    coMorbOther: String;
    previousTr: String;
    prevTrGS: String;
    fitForTr: String;
    fitForTrReason: String;
    potentialRDonors: String;
    currentAccess1: String;
    currentAccess2: String;
    currentAccess3: String;
    dOfAccessCreation: String;
    compInsuf: boolean;
    compInf: boolean;
    compAD: boolean;
    compDC: boolean;
    compOther: String;
    previousAccess1: String;
    previousAccess2: String;
    previousAccess3: String;
    previousAccess4: String;
    Frequency: Number;
    Duration: Number;
    Dialyser: String;
    antiCoagulation: String;
    hInit: String;
    hMaint: String;
    LMWHval: String;
    antiCoReason: String;
    dryWt: Number;
    avgWtGain: Number;
    avgBP: Number;
    avgPulse: Number;
    dialAdeq: String;
    dCompHead: boolean;
    dCompHG: boolean;
    dCompHOT: boolean;
    dCompHET: boolean;
    dCompMC : boolean;
    dCompAC : boolean;
    dCompVom: boolean;
    dCompSZ: boolean;
    dCompHS: boolean;
    dCompIt: boolean;
    dCompOther: String;
    labDate: String;
    cbcHB: Number;
    cbcWBC: Number;
    cbcPlatelets: Number;
    chemCre: Number;
    chemUrea: Number;
    chemSod: Number;
    chemPot: Number;
    chemCal: Number;
    chemPhos: Number;
    chemAST: Number;
    chemALT: Number;
    chemAlb: Number;
    chemMag: Number;
    chemAlph: Number;
    chemOther: String;
    Siron: Number;
    TIBC: Number;
    Sferitin: Number;
    TSAT: Number;
    hormPTH: Number;
    hormVITD: Number;
    hormOther: String;
    hbsAg: String;
    hcvAb: String;
    hcvPCR: String;
    hivI_II: String;
    othrSer: String;
    coagPT: Number;
    coagPPT: Number;
    coagINR: Number;
    cMD1: String;
    cMD2: String;
    cMD3: String;
    cMD4: String;
    cMD5: String;
    cMD6: String;
    cMD7: String;
    cMD8: String;
    cMD9: String;
    cMD10: String;
    cMD11: String;
    cMD12: String;
    cMD13: String;
    cMD14: String;
    cMD15: String;
    cMD16: String;
    HepBV: String;
    HepBVDate: String;
    InfV: String;
    InfVDate: String;
    otherVAC: String;
    progNotes: String;
    consNotes: String;


}