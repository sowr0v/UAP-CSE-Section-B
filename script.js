/**
 * UAP CSE Batch 54 (Section B) - Professional Web Platform
 * Features:
 * 1. Multi-language Toggle (English <-> Bangla) with persistent storage
 * 2. Real-time Live Search & Multi-criteria Filtering
 * 3. vCard / .vcf Contact Exporter (Individual & Batch All Contacts)
 * 4. Class Analytics & Demographic Visual Directory
 * 5. Virtual Digital Student ID Card Badge View
 * 6. Interactive Confetti Celebration Engine
 * 7. Gmail Direct Web Compose & Desktop Mail Support
 */

// Embedded fallback list (matches students.json)
const fallbackStudents = [
    {
        "id": 1,
        "name": "Abu Rafi Md.Mostak Hossain Fahim",
        "nickname": "Fahim",
        "roll": "59",
        "registrationId": "23101059",
        "email": "23101059@uap-bd.edu",
        "mobile": "01763198913",
        "emergencyContact": "01999359491",
        "hometown": "Pabna",
        "bloodGroup": "B+",
        "photo": "Photo/default-student.svg",
        "bio": "CSE Batch 54, Section B • Roll 59"
    },
    {
        "id": 2,
        "name": "Shirin Akter",
        "nickname": "Shirin",
        "roll": "56",
        "registrationId": "23201056",
        "email": "23201056@uap-bd.edu",
        "mobile": "01609009180",
        "emergencyContact": "01716569691",
        "hometown": "Noakhali",
        "bloodGroup": "B+",
        "photo": "Photo/2.png",
        "bio": "CSE Batch 54, Section B • Roll 56"
    },
    {
        "id": 3,
        "name": "Rita Akhter",
        "nickname": "Rita",
        "roll": "57",
        "registrationId": "23201057",
        "email": "23201057@uap-bd.edu",
        "mobile": "01796195673",
        "emergencyContact": "",
        "hometown": "Barisal",
        "bloodGroup": "",
        "photo": "Photo/3.png",
        "bio": "CSE Batch 54, Section B • Roll 57"
    },
    {
        "id": 4,
        "name": "Jannatun Naeem Mona",
        "nickname": "Mona",
        "roll": "58",
        "registrationId": "23201058",
        "email": "23201058@uap-bd.edu",
        "mobile": "01552409073",
        "emergencyContact": "01815033155",
        "hometown": "Kushtia",
        "bloodGroup": "O+",
        "photo": "Photo/4.png",
        "bio": "CSE Batch 54, Section B • Roll 58"
    },
    {
        "id": 5,
        "name": "Labiba Rahman Nadi",
        "nickname": "Nadi",
        "roll": "59",
        "registrationId": "23201059",
        "email": "23201059@uap-bd.edu",
        "mobile": "01572036942",
        "emergencyContact": "01911867970",
        "hometown": "Dhaka",
        "bloodGroup": "O+",
        "photo": "Photo/5.png",
        "bio": "CSE Batch 54, Section B • Roll 59"
    },
    {
        "id": 6,
        "name": "Md. Hasanul Mobin",
        "nickname": "Mobin",
        "roll": "60",
        "registrationId": "23201060",
        "email": "23201060@uap-bd.edu",
        "mobile": "01783714164",
        "emergencyContact": "0721590205",
        "hometown": "Chapai Nawabganj",
        "bloodGroup": "B+",
        "photo": "Photo/6.png",
        "bio": "CSE Batch 54, Section B • Roll 60"
    },
    {
        "id": 7,
        "name": "Zakeria Abrar",
        "nickname": "Zakeria",
        "roll": "61",
        "registrationId": "23201061",
        "email": "23201061@uap-bd.edu",
        "mobile": "01401545598",
        "emergencyContact": "",
        "hometown": "Comilla",
        "bloodGroup": "",
        "photo": "Photo/7.png",
        "bio": "CSE Batch 54, Section B • Roll 61"
    },
    {
        "id": 8,
        "name": "MD. Fataharul Islam",
        "nickname": "MD.",
        "roll": "62",
        "registrationId": "23201062",
        "email": "23201062@uap-bd.edu",
        "mobile": "01675453136",
        "emergencyContact": "01924117715",
        "hometown": "Lakshmipur",
        "bloodGroup": "O+",
        "photo": "Photo/8.png",
        "bio": "CSE Batch 54, Section B • Roll 62"
    },
    {
        "id": 9,
        "name": "Farhana Tahsin Bonny",
        "nickname": "Bonny",
        "roll": "63",
        "registrationId": "23201063",
        "email": "23201063@uap-bd.edu",
        "mobile": "01903977884",
        "emergencyContact": "",
        "hometown": "Pabna",
        "bloodGroup": "",
        "photo": "Photo/9.png",
        "bio": "CSE Batch 54, Section B • Roll 63"
    },
    {
        "id": 10,
        "name": "Samia Anjum Nidhi",
        "nickname": "Nidhi",
        "roll": "64",
        "registrationId": "23201064",
        "email": "23201064@uap-bd.edu",
        "mobile": "01400645551",
        "emergencyContact": "01720183957",
        "hometown": "Nilphamari",
        "bloodGroup": "A+",
        "photo": "Photo/10.png",
        "bio": "CSE Batch 54, Section B • Roll 64"
    },
    {
        "id": 11,
        "name": "Md Jubair Bin Hasan",
        "nickname": "Md",
        "roll": "65",
        "registrationId": "23201065",
        "email": "23201065@uap-bd.edu",
        "mobile": "01793619087",
        "emergencyContact": "01969839127",
        "hometown": "Sirajganj",
        "bloodGroup": "A+",
        "photo": "Photo/11.png",
        "bio": "CSE Batch 54, Section B • Roll 65"
    },
    {
        "id": 12,
        "name": "Annotoma Mirdha",
        "nickname": "Annotoma",
        "roll": "67",
        "registrationId": "23201067",
        "email": "23201067@uap-bd.edu",
        "mobile": "01814643703",
        "emergencyContact": "",
        "hometown": "Narsingdi",
        "bloodGroup": "",
        "photo": "Photo/12.png",
        "bio": "CSE Batch 54, Section B • Roll 67"
    },
    {
        "id": 13,
        "name": "Jobair Ahmed",
        "nickname": "Jobair",
        "roll": "69",
        "registrationId": "23201069",
        "email": "23201069@uap-bd.edu",
        "mobile": "01717228665",
        "emergencyContact": "",
        "hometown": "Gaibandha",
        "bloodGroup": "",
        "photo": "Photo/13.png",
        "bio": "CSE Batch 54, Section B • Roll 69"
    },
    {
        "id": 14,
        "name": "Sadiya Akter Seba",
        "nickname": "Seba",
        "roll": "70",
        "registrationId": "23201070",
        "email": "23201070@uap-bd.edu",
        "mobile": "01854926642",
        "emergencyContact": "",
        "hometown": "Dhaka",
        "bloodGroup": "",
        "photo": "Photo/14.png",
        "bio": "CSE Batch 54, Section B • Roll 70"
    },
    {
        "id": 15,
        "name": "Sadia Yesmin",
        "nickname": "Sadia",
        "roll": "71",
        "registrationId": "23201071",
        "email": "23201071@uap-bd.edu",
        "mobile": "01708550293",
        "emergencyContact": "01763703924",
        "hometown": "Satkhira",
        "bloodGroup": "A+",
        "photo": "Photo/15.png",
        "bio": "CSE Batch 54, Section B • Roll 71"
    },
    {
        "id": 16,
        "name": "Md. Naziz Al Sayem",
        "nickname": "Naziz",
        "roll": "72",
        "registrationId": "23201072",
        "email": "23201072@uap-bd.edu",
        "mobile": "01833881131",
        "emergencyContact": "",
        "hometown": "Jamalpur",
        "bloodGroup": "",
        "photo": "Photo/16.png",
        "bio": "CSE Batch 54, Section B • Roll 72"
    },
    {
        "id": 17,
        "name": "Nafisa Tabassum Maria",
        "nickname": "Maria",
        "roll": "73",
        "registrationId": "23201073",
        "email": "23201073@uap-bd.edu",
        "mobile": "01407906493",
        "emergencyContact": "01915357350",
        "hometown": "Sherpur",
        "bloodGroup": "A+",
        "photo": "Photo/17.png",
        "bio": "CSE Batch 54, Section B • Roll 73"
    },
    {
        "id": 18,
        "name": "Tamim Hasan Likhon",
        "nickname": "Likhon",
        "roll": "74",
        "registrationId": "23201074",
        "email": "23201074@uap-bd.edu",
        "mobile": "01725686229",
        "emergencyContact": "",
        "hometown": "Jamalpur",
        "bloodGroup": "",
        "photo": "Photo/18.png",
        "bio": "CSE Batch 54, Section B • Roll 74"
    },
    {
        "id": 19,
        "name": "S.M. Fahim Mahmud",
        "nickname": "Fahim",
        "roll": "76",
        "registrationId": "23201076",
        "email": "23201072@uap-bd.edu",
        "mobile": "01707598824",
        "emergencyContact": "",
        "hometown": "Sirajganj",
        "bloodGroup": "",
        "photo": "Photo/19.png",
        "bio": "CSE Batch 54, Section B • Roll 76"
    },
    {
        "id": 20,
        "name": "Shakil Ahmed",
        "nickname": "Shakil",
        "roll": "77",
        "registrationId": "23201077",
        "email": "23201077@uap-bd.edu",
        "mobile": "01904774842",
        "emergencyContact": "",
        "hometown": "Tangail",
        "bloodGroup": "",
        "photo": "Photo/20.png",
        "bio": "CSE Batch 54, Section B • Roll 77"
    },
    {
        "id": 21,
        "name": "Naimur Rahman Himel",
        "nickname": "Himel",
        "roll": "79",
        "registrationId": "23201079",
        "email": "23201079@uap-bd.edu",
        "mobile": "01303500089",
        "emergencyContact": "01303500089",
        "hometown": "Sherpur",
        "bloodGroup": "A+",
        "photo": "Photo/21.png",
        "bio": "CSE Batch 54, Section B • Roll 79"
    },
    {
        "id": 22,
        "name": "MD.Mokarram Ahmed",
        "nickname": "Labib",
        "roll": "81",
        "registrationId": "23201081",
        "email": "23201081@uap-bd.edu",
        "mobile": "01643037538",
        "emergencyContact": "",
        "hometown": "Lakshmipur",
        "bloodGroup": "",
        "photo": "Photo/22.png",
        "bio": "CSE Batch 54, Section B • Roll 81"
    },
    {
        "id": 23,
        "name": "Arnob Richard Rozario",
        "nickname": "Arnob",
        "roll": "82",
        "registrationId": "23201082",
        "email": "23201082@uap-bd.edu",
        "mobile": "01627881947",
        "emergencyContact": "",
        "hometown": "Gazipur",
        "bloodGroup": "",
        "photo": "Photo/23.png",
        "bio": "CSE Batch 54, Section B • Roll 82"
    },
    {
        "id": 24,
        "name": "Iffat Mubtahijah Anisha",
        "nickname": "Anisha",
        "roll": "83",
        "registrationId": "23201083",
        "email": "23201083@uap-bd.edu",
        "mobile": "01939872464",
        "emergencyContact": "01820743840",
        "hometown": "Joypurhat",
        "bloodGroup": "B+",
        "photo": "Photo/24.png",
        "bio": "CSE Batch 54, Section B • Roll 83"
    },
    {
        "id": 25,
        "name": "F.M.Maftahul Jannat",
        "nickname": "Jannat",
        "roll": "84",
        "registrationId": "23201084",
        "email": "23201084@uap-bd.edu",
        "mobile": "01312687156",
        "emergencyContact": "01711943553",
        "hometown": "Bogura",
        "bloodGroup": "O+",
        "photo": "Photo/25.png",
        "bio": "CSE Batch 54, Section B • Roll 84"
    },
    {
        "id": 26,
        "name": "Mst. Aysha Siddiquea",
        "nickname": "Aysha",
        "roll": "86",
        "registrationId": "23201086",
        "email": "23201086@uap-bd.edu",
        "mobile": "01775962792",
        "emergencyContact": "01914458025",
        "hometown": "Kushtia",
        "bloodGroup": "B+",
        "photo": "Photo/26.png",
        "bio": "CSE Batch 54, Section B • Roll 86"
    },
    {
        "id": 27,
        "name": "Tasfiah Aiman Khan",
        "nickname": "Tasfiah",
        "roll": "87",
        "registrationId": "23201087",
        "email": "23201087@uap-bd.edu",
        "mobile": "01870280500",
        "emergencyContact": "",
        "hometown": "Gazipur",
        "bloodGroup": "",
        "photo": "Photo/27.png",
        "bio": "CSE Batch 54, Section B • Roll 87"
    },
    {
        "id": 28,
        "name": "Humayra Maya",
        "nickname": "Maya",
        "roll": "89",
        "registrationId": "23201089",
        "email": "23201089@uap-bd.edu",
        "mobile": "01768387278",
        "emergencyContact": "",
        "hometown": "Bogura",
        "bloodGroup": "",
        "photo": "Photo/28.png",
        "bio": "CSE Batch 54, Section B • Roll 89"
    },
    {
        "id": 29,
        "name": "Avishek Hira",
        "nickname": "Hira",
        "roll": "90",
        "registrationId": "23201090",
        "email": "23201090@uap-bd.edu",
        "mobile": "01797170234",
        "emergencyContact": "01712662609",
        "hometown": "Gopalganj",
        "bloodGroup": "A+",
        "photo": "Photo/29.png",
        "bio": "CSE Batch 54, Section B • Roll 90"
    },
    {
        "id": 30,
        "name": "Izzab Mohammad",
        "nickname": "Izzab",
        "roll": "91",
        "registrationId": "23201091",
        "email": "23201091@uap-bd.edu",
        "mobile": "01730402239",
        "emergencyContact": "01571794666",
        "hometown": "Narayanganj",
        "bloodGroup": "A+",
        "photo": "Photo/30.png",
        "bio": "CSE Batch 54, Section B • Roll 91"
    },
    {
        "id": 31,
        "name": "Suria Akter kona",
        "nickname": "Kona",
        "roll": "92",
        "registrationId": "23201092",
        "email": "23201092@uap-bd.edu",
        "mobile": "01328258721",
        "emergencyContact": "",
        "hometown": "Barisal",
        "bloodGroup": "",
        "photo": "Photo/31.png",
        "bio": "CSE Batch 54, Section B • Roll 92"
    },
    {
        "id": 32,
        "name": "Nabila Tabassum",
        "nickname": "Nabila",
        "roll": "93",
        "registrationId": "23201093",
        "email": "23201093@uap-bd.edu",
        "mobile": "01311264093",
        "emergencyContact": "",
        "hometown": "Chandpur",
        "bloodGroup": "O+",
        "photo": "Photo/default-student.svg",
        "bio": "CSE Batch 54, Section B • Roll 93"
    },
    {
        "id": 33,
        "name": "Humayra Sadia",
        "nickname": "Humayra",
        "roll": "94",
        "registrationId": "23201094",
        "email": "23201094@uap-bd.edu",
        "mobile": "01869409485",
        "emergencyContact": "",
        "hometown": "Rajshahi",
        "bloodGroup": "O+",
        "photo": "Photo/32.png",
        "bio": "CSE Batch 54, Section B • Roll 94"
    },
    {
        "id": 34,
        "name": "Omimma Binte Kamal Onti",
        "nickname": "Onti",
        "roll": "95",
        "registrationId": "23201095",
        "email": "23201095@uap-bd.edu",
        "mobile": "01733699045",
        "emergencyContact": "",
        "hometown": "Patuakhali",
        "bloodGroup": "B+",
        "photo": "Photo/33.png",
        "bio": "CSE Batch 54, Section B • Roll 95"
    },
    {
        "id": 35,
        "name": "Tushar Roy",
        "nickname": "Tushar",
        "roll": "96",
        "registrationId": "23201096",
        "email": "23201096@uap-bd.edu",
        "mobile": "01644503359",
        "emergencyContact": "01724034936",
        "hometown": "Thakurgaon",
        "bloodGroup": "A+",
        "photo": "Photo/34.png",
        "bio": "CSE Batch 54, Section B • Roll 96"
    },
    {
        "id": 36,
        "name": "Intisar Rahman Khan",
        "nickname": "Intisar",
        "roll": "97",
        "registrationId": "23201097",
        "email": "23201097@uap-bd.edu",
        "mobile": "01792616710",
        "emergencyContact": "01711056288",
        "hometown": "Gazipur",
        "bloodGroup": "O+",
        "photo": "Photo/35.png",
        "bio": "CSE Batch 54, Section B • Roll 97"
    },
    {
        "id": 37,
        "name": "Tabassum Siddika Lishamoni",
        "nickname": "Lishamoni",
        "roll": "99",
        "registrationId": "23201099",
        "email": "23201099@uap-bd.edu",
        "mobile": "01790561307",
        "emergencyContact": "01718480261",
        "hometown": "Jamalpur",
        "bloodGroup": "A+",
        "photo": "Photo/36.png",
        "bio": "CSE Batch 54, Section B • Roll 99"
    },
    {
        "id": 38,
        "name": "Samsun Nahar Niha",
        "nickname": "Niha",
        "roll": "100",
        "registrationId": "23201100",
        "email": "23201100@uap-bd.edu",
        "mobile": "01637836962",
        "emergencyContact": "01711288324",
        "hometown": "Bhola",
        "bloodGroup": "B+",
        "photo": "Photo/37.png",
        "bio": "CSE Batch 54, Section B • Roll 100"
    },
    {
        "id": 39,
        "name": "Md.Mahbub - E - Samdani",
        "nickname": "Samdhani",
        "roll": "101",
        "registrationId": "23201101",
        "email": "23201101@uap-bd.edu",
        "mobile": "01794044408",
        "emergencyContact": "01682010867",
        "hometown": "Sirajganj",
        "bloodGroup": "O+",
        "photo": "Photo/38.png",
        "bio": "CSE Batch 54, Section B • Roll 101"
    },
    {
        "id": 40,
        "name": "Md Adil Hossain",
        "nickname": "Adil",
        "roll": "102",
        "registrationId": "23201102",
        "email": "23201102@uap-bd.edu",
        "mobile": "01746856852",
        "emergencyContact": "",
        "hometown": "Netrakona",
        "bloodGroup": "",
        "photo": "Photo/39.png",
        "bio": "CSE Batch 54, Section B • Roll 102"
    },
    {
        "id": 41,
        "name": "Rifa Tusfia Mouri",
        "nickname": "Mouri",
        "roll": "103",
        "registrationId": "23201103",
        "email": "23201103@uap-bd.edu",
        "mobile": "01728491947",
        "emergencyContact": "",
        "hometown": "Jamalpur",
        "bloodGroup": "",
        "photo": "Photo/40.png",
        "bio": "CSE Batch 54, Section B • Roll 103"
    },
    {
        "id": 42,
        "name": "Snigdha Mondal",
        "nickname": "Snigdha",
        "roll": "104",
        "registrationId": "23201104",
        "email": "23201104@uap-bd.edu",
        "mobile": "01725584441",
        "emergencyContact": "",
        "hometown": "Dhaka",
        "bloodGroup": "",
        "photo": "Photo/41.png",
        "bio": "CSE Batch 54, Section B • Roll 104"
    },
    {
        "id": 43,
        "name": "Sultana Rupa (Miraa)",
        "nickname": "Mira",
        "roll": "106",
        "registrationId": "23201106",
        "email": "23201106@uap-bd.edu",
        "mobile": "01604178188",
        "emergencyContact": "",
        "hometown": "Faridpur",
        "bloodGroup": "B+",
        "photo": "Photo/42.png",
        "bio": "CSE Batch 54, Section B • Roll 106"
    },
    {
        "id": 44,
        "name": "Md.Rohan Hasan Khan",
        "nickname": "Rohan",
        "roll": "108",
        "registrationId": "23201108",
        "email": "23201108@uap-bd.edu",
        "mobile": "01999240988",
        "emergencyContact": "01516566397",
        "hometown": "Jashore",
        "bloodGroup": "B-",
        "photo": "Photo/43.png",
        "bio": "CSE Batch 54, Section B • Roll 108"
    },
    {
        "id": 45,
        "name": "Mijanur Rahman",
        "nickname": "Sowrov",
        "roll": "110",
        "registrationId": "23201110",
        "email": "23201110@uap-bd.edu",
        "mobile": "01635070125",
        "emergencyContact": "01726565685",
        "hometown": "Noakhali",
        "bloodGroup": "O+",
        "photo": "Photo/44.png",
        "bio": "Website Developer • CSE Batch 54, Section B • Roll 110"
    }
];

let allStudents = [...fallbackStudents];
let currentSlideIndex = 0;
let slideIntervalId = null;
let isSliderPaused = false;
let currentOpenedStudent = null;
let currentLanguage = localStorage.getItem("uap_lang") || "en";

// ================= I18N DICTIONARY =================
const i18n = {
    en: {
        headerTitle: "University of Asia Pacific",
        headerSubtitle: "Department of Computer Science and Engineering",
        headerBadge: "Batch 54 • Section B Directory",
        tabStudents: "🎓 Students Directory",
        tabAnalytics: "📊 Class Analytics",
        tabMemories: "📸 Campus Memories",
        tabAbout: "ℹ️ About & Resources",
        searchPlaceholder: "Search by name, roll, reg ID, hometown, mobile, blood group...",
        bloodFilterLabel: "🩸 Blood Group:",
        allGroups: "All Groups",
        hometownFilterLabel: "📍 Hometown:",
        allHometowns: "All Hometowns",
        resetBtn: "Reset",
        broadcastText: "<strong>Section B Broadcast & Contacts:</strong> Send class notices, slides, or save entire batch contacts",
        emailAllBtn: "✉️ Email All Classmates",
        saveAllVcfBtn: "💾 Save All Contacts (.vcf)",
        copyAllEmailsBtn: "📋 Copy All Emails",
        noResultsTitle: "No students found",
        noResultsDesc: "Try searching with another name, district, or reset your filters.",
        resetFiltersAction: "Reset Filters",
        analyticsTitle: "Class Demographics & Analytics",
        analyticsSubtitle: "Insights, regional representation, and blood donor directory of CSE Batch 54, Section B",
        memoriesTitle: "Campus Memories & Moments",
        memoriesSubtitle: "Capturing beautiful memories from our days at University of Asia Pacific",
        aboutTitle: "About Section B & Academic Resources",
        aboutSubtitle: "Essential links, course resources, and contact information for our classmates",
        sliderHint: "Hover to pause • Click arrows to navigate",
        langToggleLabel: "বাংলা",
        addMemoryBtn: "Add New Memory",
        restoreMemoriesBtn: "Reset Defaults",
        noMemoriesTitle: "No memories saved yet",
        noMemoriesDesc: "Add your favorite photos with classmates or restore original defaults."
    },
    bn: {
        headerTitle: "ইউনিভার্সিটি অব এশিয়া প্যাসিফিক",
        headerSubtitle: "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং বিভাগ",
        headerBadge: "ব্যাচ ৫৪ • সেকশন বি ডিরেক্টরি",
        tabStudents: "🎓 শিক্ষার্থী তালিকা",
        tabAnalytics: "📊 ব্যাচ অ্যানালিটিক্স",
        tabMemories: "📸 ক্যাম্পাস মেমোরিজ",
        tabAbout: "ℹ️ পরিচিতি ও রিসোর্স",
        searchPlaceholder: "নাম, রোল, রেজিস্ট্রেশন নম্বর, জেলা বা রক্তের গ্রুপ দিয়ে খুঁজুন...",
        bloodFilterLabel: "🩸 রক্তের গ্রুপ:",
        allGroups: "সকল গ্রুপ",
        hometownFilterLabel: "📍 জেলা:",
        allHometowns: "সকল জেলা",
        resetBtn: "রিসেট",
        broadcastText: "<strong>সেকশন বি ব্রডকাস্ট ও কন্টাক্ট:</strong> নোটিশ ও স্লাইড পাঠাতে বা সব কন্টাক্ট সেভ করতে",
        emailAllBtn: "✉️ সবাইকে একসাথে মেইল",
        saveAllVcfBtn: "💾 সব কন্টাক্ট সেভ (.vcf)",
        copyAllEmailsBtn: "📋 সব ইমেইল কপি",
        noResultsTitle: "কোনো সহপাঠী পাওয়া যায়নি",
        noResultsDesc: "অন্য কোনো নাম, রোল বা জেলা দিয়ে সার্চ করুন অথবা ফিল্টার রিসেট করুন।",
        resetFiltersAction: "ফিল্টার রিসেট করুন",
        analyticsTitle: "ব্যাচ ডেমোগ্রাফিক্স ও অ্যানালিটিক্স",
        analyticsSubtitle: "সিএসই ব্যাচ ৫৪ (সেকশন বি)-এর আঞ্চলিক অনুপাত ও রক্তদাতা ডিরেক্টরি",
        memoriesTitle: "ক্যাম্পাস মেমোরিজ ও স্মরণীয় মুহূর্ত",
        memoriesSubtitle: "ইউনিভার্সিটি অব এশিয়া প্যাসিফিকের সুন্দর স্মৃতিমালা",
        aboutTitle: "সেকশন বি পরিচিতি ও একাডেমিক রিসোর্স",
        aboutSubtitle: "সহপাঠীদের প্রয়োজনীয় লিংক, কোর্স রিসোর্স ও কন্টাক্ট তথ্য",
        sliderHint: "থামাতে মাউস রাখুন • পরিবর্তন করতে অ্যারো ক্লিক করুন",
        langToggleLabel: "English",
        addMemoryBtn: "নতুন মেমোরি যোগ করুন",
        restoreMemoriesBtn: "ডিফল্ট মেমোরি রিস্টোর",
        noMemoriesTitle: "কোনো মেমোরি পাওয়া যায়নি",
        noMemoriesDesc: "সহপাঠীদের সাথে নতুন স্মৃতি যোগ করুন অথবা পূর্বের স্মৃতি রিস্টোর করুন।"
    }
};

// DOM Elements
const galleryEl = document.getElementById("studentsGallery");
const searchInput = document.getElementById("searchInput");
const bloodFilter = document.getElementById("bloodGroupFilter");
const hometownFilter = document.getElementById("hometownFilter");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const resultsCountEl = document.getElementById("resultsCount");
const noResultsMsg = document.getElementById("noResultsMsg");

const sliderImg = document.getElementById("sliderImage");
const sliderCounter = document.getElementById("counter");
const sliderContainer = document.getElementById("sliderContainer");
const sliderPrevBtn = document.getElementById("sliderPrev");
const sliderNextBtn = document.getElementById("sliderNext");

// ================= 1. INITIALIZATION & DATA LOADING =================
async function initApp() {
    try {
        const response = await fetch("students.json");
        if (response.ok) {
            allStudents = await response.json();
        }
    } catch (e) {
        console.info("Using embedded student fallback data.");
    }

    populateHometownOptions();
    renderGallery(allStudents);
    renderAnalytics();
    initSlider();
    initMemories();
    initFaculty();
    setupEventListeners();
    applyLanguage(currentLanguage);
}

// ================= 2. LANGUAGE SWITCHER =================
function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "bn" : "en";
    localStorage.setItem("uap_lang", currentLanguage);
    applyLanguage(currentLanguage);
    showToast(currentLanguage === "bn" ? "🌐 ভাষা বাংলায় পরিবর্তন করা হয়েছে" : "🌐 Language switched to English");
}

function applyLanguage(lang) {
    const t = i18n[lang] || i18n.en;

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = text;
    };

    setText("headerTitle", t.headerTitle);
    setText("headerSubtitle", t.headerSubtitle);
    setText("headerBadge", t.headerBadge);
    setText("tabStudentsBtn", t.tabStudents);
    setText("tabAnalyticsBtn", t.tabAnalytics);
    setText("tabMemoriesBtn", t.tabMemories);
    setText("tabAboutBtn", t.tabAbout);
    setText("bloodFilterLabel", t.bloodFilterLabel);
    setText("hometownFilterLabel", t.hometownFilterLabel);
    setText("broadcastBarText", t.broadcastText);
    setText("noResultsTitle", t.noResultsTitle);
    setText("noResultsDesc", t.noResultsDesc);
    setText("resetAllBtn", t.resetFiltersAction);
    setText("analyticsTitle", t.analyticsTitle);
    setText("analyticsSubtitle", t.analyticsSubtitle);
    setText("memoriesTitle", t.memoriesTitle);
    setText("memoriesSubtitle", t.memoriesSubtitle);
    setText("aboutTitle", t.aboutTitle);
    setText("aboutSubtitle", t.aboutSubtitle);
    setText("currentLangLabel", t.langToggleLabel);
    setText("sliderHintText", t.sliderHint);
    if (t.addMemoryBtn) setText("addMemoryBtnLabel", t.addMemoryBtn);
    if (t.restoreMemoriesBtn) setText("restoreMemoriesBtnLabel", t.restoreMemoriesBtn);
    if (t.noMemoriesTitle) setText("noMemoriesTitle", t.noMemoriesTitle);
    if (t.noMemoriesDesc) setText("noMemoriesDesc", t.noMemoriesDesc);

    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    if (resetFiltersBtn) resetFiltersBtn.textContent = t.resetBtn;
}

// Populate Hometown Filter dropdown with unique hometowns
function populateHometownOptions() {
    if (!hometownFilter) return;
    const hometowns = new Set();
    allStudents.forEach(s => {
        if (s.hometown && s.hometown.trim()) {
            hometowns.add(s.hometown.trim());
        }
    });

    const sortedHometowns = Array.from(hometowns).sort();
    sortedHometowns.forEach(h => {
        const opt = document.createElement("option");
        opt.value = h;
        opt.textContent = h;
        hometownFilter.appendChild(opt);
    });
}

// ================= 3. GALLERY RENDERING =================
function renderGallery(students) {
    if (!galleryEl) return;
    galleryEl.innerHTML = "";

    if (students.length === 0) {
        galleryEl.style.display = "none";
        if (noResultsMsg) noResultsMsg.style.display = "block";
        if (resultsCountEl) resultsCountEl.textContent = `Showing 0 of ${allStudents.length} students`;
        return;
    }

    galleryEl.style.display = "grid";
    if (noResultsMsg) noResultsMsg.style.display = "none";
    if (resultsCountEl) resultsCountEl.textContent = `Showing ${students.length} of ${allStudents.length} students`;

    students.forEach(student => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openStudentModal(student);

        const hasPhone = student.mobile && student.mobile.trim() !== "";
        const hasEmail = student.email && student.email.trim() !== "";
        const cleanMobile = hasPhone ? student.mobile.replace(/[^0-9+]/g, '') : '';
        const waNumber = hasPhone ? (cleanMobile.startsWith('+') ? cleanMobile : '88' + cleanMobile.replace(/^0+/, '')) : '';
        const gmailUrl = hasEmail ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(student.email)}` : '';

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${student.photo}" alt="${student.name}" loading="lazy" onerror="this.src='Photo/default-student.svg'">
                ${student.bloodGroup ? `<span class="blood-badge" title="Blood Group: ${student.bloodGroup}">🩸 ${student.bloodGroup}</span>` : ''}
            </div>
            <div class="card-body">
                <h3>${student.name}</h3>
                <div class="card-meta">
                    <strong>Reg ID:</strong> <span class="reg-badge">${student.registrationId || '--'}</span>
                    <strong style="margin-left:8px;">Roll:</strong> <span>${student.roll || '--'}</span>
                </div>
                <div class="card-meta">
                    <strong>District:</strong> <span>${student.hometown || 'Not provided'}</span>
                </div>
                <div class="card-meta">
                    <strong>Mobile:</strong> <span>${student.mobile || 'Not provided'}</span>
                </div>
                <div class="card-footer" onclick="event.stopPropagation()">
                    ${hasPhone ? `
                        <a href="tel:${cleanMobile}" class="card-btn call" title="Call ${student.name}">
                            📞 Call
                        </a>
                        <a href="https://wa.me/${waNumber}" target="_blank" class="card-btn whatsapp" title="WhatsApp Message">
                            💬 WhatsApp
                        </a>
                    ` : ''}
                    ${hasEmail ? `
                        <a href="${gmailUrl}" target="_blank" class="card-btn email" title="Send email via Gmail to ${student.name}">
                            ✉️ Mail
                        </a>
                    ` : `
                        <button class="card-btn" onclick="openStudentModalById(${student.id})">
                            👁️ Details
                        </button>
                    `}
                </div>
            </div>
        `;
        galleryEl.appendChild(card);
    });
}

function openStudentModalById(id) {
    const student = allStudents.find(s => s.id === id);
    if (student) openStudentModal(student);
}

// ================= 4. SEARCH & FILTER LOGIC =================
function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const selectedBlood = bloodFilter ? bloodFilter.value : "all";
    const selectedHometown = hometownFilter ? hometownFilter.value : "all";

    if (clearSearchBtn) {
        clearSearchBtn.style.display = query.length > 0 ? "block" : "none";
    }

    const filtered = allStudents.filter(student => {
        const nameMatch = student.name && student.name.toLowerCase().includes(query);
        const nicknameMatch = student.nickname && student.nickname.toLowerCase().includes(query);
        const regMatch = student.registrationId && student.registrationId.toLowerCase().includes(query);
        const rollMatch = student.roll && student.roll.toLowerCase() === query;
        const hometownMatch = student.hometown && student.hometown.toLowerCase().includes(query);
        const mobileMatch = student.mobile && student.mobile.toLowerCase().includes(query);
        const emailMatch = student.email && student.email.toLowerCase().includes(query);
        const bloodMatchQuery = student.bloodGroup && student.bloodGroup.toLowerCase().includes(query);

        const matchesQuery = query === "" || nameMatch || nicknameMatch || regMatch || rollMatch || hometownMatch || mobileMatch || emailMatch || bloodMatchQuery;

        const matchesBlood = selectedBlood === "all" || (student.bloodGroup && student.bloodGroup.toUpperCase() === selectedBlood.toUpperCase());
        const matchesHometown = selectedHometown === "all" || (student.hometown && student.hometown.toLowerCase() === selectedHometown.toLowerCase());

        return matchesQuery && matchesBlood && matchesHometown;
    });

    renderGallery(filtered);
}

function resetAllFilters() {
    if (searchInput) searchInput.value = "";
    if (bloodFilter) bloodFilter.value = "all";
    if (hometownFilter) hometownFilter.value = "all";
    if (clearSearchBtn) clearSearchBtn.style.display = "none";
    renderGallery(allStudents);
}

// ================= 5. SLIDER FUNCTIONALITY =================
function getSliderStudents() {
    const valid = allStudents.filter(s => s.photo && !s.photo.endsWith(".svg"));
    return valid.length > 0 ? valid : allStudents;
}

function initSlider() {
    updateSliderUI();
    startSliderTimer();

    if (sliderPrevBtn) {
        sliderPrevBtn.onclick = (e) => {
            e.stopPropagation();
            prevSlide();
        };
    }

    if (sliderNextBtn) {
        sliderNextBtn.onclick = (e) => {
            e.stopPropagation();
            nextSlide();
        };
    }

    if (sliderContainer) {
        sliderContainer.addEventListener("mouseenter", () => {
            isSliderPaused = true;
            stopSliderTimer();
        });

        sliderContainer.addEventListener("mouseleave", () => {
            isSliderPaused = false;
            startSliderTimer();
        });
    }
}

function updateSliderUI() {
    const sliderList = getSliderStudents();
    if (!sliderImg || sliderList.length === 0) return;
    sliderImg.src = sliderList[currentSlideIndex].photo;
    sliderImg.alt = sliderList[currentSlideIndex].name;
    if (sliderCounter) {
        sliderCounter.textContent = `${currentSlideIndex + 1} / ${sliderList.length}`;
    }
}

function nextSlide() {
    const sliderList = getSliderStudents();
    if (!sliderImg || sliderList.length === 0) return;
    sliderImg.classList.add("slide-out");

    setTimeout(() => {
        currentSlideIndex = (currentSlideIndex + 1) % sliderList.length;
        updateSliderUI();
        sliderImg.classList.remove("slide-out");
        sliderImg.classList.add("slide-in");

        setTimeout(() => {
            sliderImg.classList.remove("slide-in");
        }, 500);
    }, 450);
}

function prevSlide() {
    const sliderList = getSliderStudents();
    if (!sliderImg || sliderList.length === 0) return;
    sliderImg.classList.add("slide-out");

    setTimeout(() => {
        currentSlideIndex = (currentSlideIndex - 1 + sliderList.length) % sliderList.length;
        updateSliderUI();
        sliderImg.classList.remove("slide-out");
        sliderImg.classList.add("slide-in");

        setTimeout(() => {
            sliderImg.classList.remove("slide-in");
        }, 500);
    }, 450);
}

function startSliderTimer() {
    stopSliderTimer();
    slideIntervalId = setInterval(() => {
        if (!isSliderPaused) {
            nextSlide();
        }
    }, 3200);
}

function stopSliderTimer() {
    if (slideIntervalId) {
        clearInterval(slideIntervalId);
        slideIntervalId = null;
    }
}

// ================= 6. MODAL & DIGITAL STUDENT ID =================
function openStudentModal(student) {
    currentOpenedStudent = student;
    toggleStudentIdCard(false);

    const modal = document.getElementById("imageModal");
    if (!modal) return;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    const modalImg = document.getElementById("modalImg");
    if (modalImg) {
        modalImg.src = student.photo;
        modalImg.alt = student.name;
    }

    const titleEl = document.getElementById("modalTitle");
    if (titleEl) titleEl.textContent = student.name;

    const bloodTag = document.getElementById("modalBloodTag");
    if (bloodTag) {
        if (student.bloodGroup) {
            bloodTag.textContent = `🩸 Blood: ${student.bloodGroup}`;
            bloodTag.style.display = "inline-block";
        } else {
            bloodTag.style.display = "none";
        }
    }

    const nameEl = document.querySelector("#modalName span");
    if (nameEl) nameEl.textContent = student.name || "Not provided";

    const regEl = document.getElementById("modalRegText");
    if (regEl) regEl.textContent = student.registrationId || "--";

    const rollEl = document.getElementById("modalRollText");
    if (rollEl) rollEl.textContent = student.roll || "--";

    const emailTextEl = document.getElementById("modalEmailText");
    const gmailUrl = student.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(student.email)}` : '';

    if (emailTextEl) {
        emailTextEl.innerHTML = student.email ? 
            `<a href="${gmailUrl}" target="_blank" style="color:#38bdf8; text-decoration:none; font-weight:600;" title="Click to compose in Gmail">${student.email}</a>` : 
            "Not provided";
    }

    const hometownEl = document.querySelector("#modalHometown span");
    if (hometownEl) hometownEl.textContent = student.hometown || "Not provided";

    const mobileEl = document.querySelector("#modalMobile span");
    if (mobileEl) {
        mobileEl.innerHTML = student.mobile ? 
            `<a href="tel:${student.mobile}" style="color:#38bdf8; text-decoration:none;">${student.mobile}</a>` : 
            "Not provided";
    }

    const emergencyEl = document.getElementById("modalEmergencyText");
    if (emergencyEl) {
        emergencyEl.innerHTML = student.emergencyContact ?
            `<a href="tel:${student.emergencyContact}" style="color:#f87171; text-decoration:none;">${student.emergencyContact}</a>` :
            "Not provided";
    }

    const bioEl = document.querySelector("#modalBio span");
    if (bioEl) bioEl.textContent = student.bio || "CSE Batch 54, Section B";

    // Setup Digital ID View
    const idPhoto = document.getElementById("idCardPhoto");
    if (idPhoto) idPhoto.src = student.photo;

    const idName = document.getElementById("idCardName");
    if (idName) idName.textContent = student.name;

    const idReg = document.getElementById("idCardReg");
    if (idReg) idReg.textContent = student.registrationId || "--";

    const idRoll = document.getElementById("idCardRoll");
    if (idRoll) idRoll.textContent = student.roll || "--";

    const idDist = document.getElementById("idCardDist");
    if (idDist) idDist.textContent = student.hometown || "Bangladesh";

    const idBlood = document.getElementById("idCardBlood");
    if (idBlood) {
        idBlood.textContent = student.bloodGroup || "--";
        idBlood.style.display = student.bloodGroup ? "block" : "none";
    }

    // Email Buttons
    const gmailBtn = document.getElementById("modalGmailBtn");
    const copyEmailBtn = document.getElementById("modalCopyEmailBtn");

    if (student.email && student.email.trim() !== "") {
        if (gmailBtn) {
            gmailBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(student.email)}`;
            gmailBtn.style.display = "inline-flex";
        }
        if (copyEmailBtn) copyEmailBtn.style.display = "inline-flex";
    } else {
        if (gmailBtn) gmailBtn.style.display = "none";
        if (copyEmailBtn) copyEmailBtn.style.display = "none";
    }

    // Phone / WhatsApp Buttons
    const callBtn = document.getElementById("modalCallBtn");
    const waBtn = document.getElementById("modalWaBtn");

    if (student.mobile && student.mobile.trim() !== "") {
        const cleanMobile = student.mobile.replace(/[^0-9+]/g, '');
        const waNumber = cleanMobile.startsWith('+') ? cleanMobile : '88' + cleanMobile.replace(/^0+/, '');

        if (callBtn) {
            callBtn.href = `tel:${cleanMobile}`;
            callBtn.style.display = "inline-flex";
        }
        if (waBtn) {
            waBtn.href = `https://wa.me/${waNumber}`;
            waBtn.style.display = "inline-flex";
        }
    } else {
        if (callBtn) callBtn.style.display = "none";
        if (waBtn) waBtn.style.display = "none";
    }
}

function toggleStudentIdCard(showId) {
    const normalView = document.getElementById("modalNormalView");
    const idView = document.getElementById("modalIdCardView");

    if (showId) {
        if (normalView) normalView.style.display = "none";
        if (idView) idView.style.display = "block";
    } else {
        if (normalView) normalView.style.display = "flex";
        if (idView) idView.style.display = "none";
    }
}

function copyCurrentStudentEmail() {
    if (!currentOpenedStudent || !currentOpenedStudent.email) return;
    copyTextToClipboard(currentOpenedStudent.email, `Copied ${currentOpenedStudent.name}'s email!`);
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "";
}

// ================= 7. VCARD GENERATOR (.VCF) =================
function generateVCardString(student) {
    const nameParts = student.name.trim().split(" ");
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
    const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : student.name;

    return [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${student.name}`,
        `N:${lastName};${firstName};;;`,
        "ORG:University of Asia Pacific;Department of Computer Science & Engineering",
        "TITLE:Student (CSE Batch 54, Section B)",
        student.mobile ? `TEL;TYPE=CELL:${student.mobile}` : "",
        student.emergencyContact ? `TEL;TYPE=HOME:${student.emergencyContact}` : "",
        student.email ? `EMAIL;TYPE=INTERNET:${student.email}` : "",
        student.hometown ? `ADR;TYPE=HOME:;;;${student.hometown};;;Bangladesh` : "",
        `NOTE:Registration ID: ${student.registrationId || '--'} | Roll: ${student.roll || '--'} | Blood: ${student.bloodGroup || '--'}`,
        "END:VCARD"
    ].filter(Boolean).join("\r\n");
}

function downloadCurrentStudentVCard() {
    if (!currentOpenedStudent) return;
    const vcard = generateVCardString(currentOpenedStudent);
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const filename = `${currentOpenedStudent.name.replace(/\s+/g, '_')}_UAP.vcf`;
    triggerFileDownload(blob, filename);
    showToast(`💾 Saved ${currentOpenedStudent.name}'s contact file!`);
}

function downloadAllVCards() {
    const allCards = allStudents.map(generateVCardString).join("\r\n\r\n");
    const blob = new Blob([allCards], { type: "text/vcard;charset=utf-8" });
    const filename = "UAP_CSE_Batch_54_Section_B_All_45_Contacts.vcf";
    triggerFileDownload(blob, filename);
    showToast("💾 Saved all 45 classmate contacts to file!");
}

function triggerFileDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ================= 8. CLASS DEMOGRAPHICS & ANALYTICS =================
function renderAnalytics() {
    // 1. KPI Counts
    const totalEl = document.getElementById("statTotalStudents");
    if (totalEl) totalEl.textContent = allStudents.length;

    const bloodCount = allStudents.filter(s => s.bloodGroup && s.bloodGroup.trim() !== "").length;
    const bloodDonorEl = document.getElementById("statBloodDonors");
    if (bloodDonorEl) bloodDonorEl.textContent = bloodCount;

    const districtSet = new Set(allStudents.map(s => s.hometown && s.hometown.trim()).filter(Boolean));
    const distEl = document.getElementById("statDistricts");
    if (distEl) distEl.textContent = districtSet.size;

    // 2. Blood Groups Distribution
    const bloodFreq = {};
    allStudents.forEach(s => {
        const b = s.bloodGroup ? s.bloodGroup.toUpperCase() : "Unknown";
        bloodFreq[b] = (bloodFreq[b] || 0) + 1;
    });

    const bloodContainer = document.getElementById("bloodBarsContainer");
    if (bloodContainer) {
        bloodContainer.innerHTML = "";
        const bloodColors = {
            "O+": "#ef4444",
            "A+": "#38bdf8",
            "B+": "#22c55e",
            "AB+": "#a855f7",
            "B-": "#f59e0b",
            "A-": "#ec4899",
            "O-": "#f97316",
            "AB-": "#06b6d4",
            "Unknown": "#64748b"
        };

        Object.keys(bloodFreq).sort((a,b) => bloodFreq[b] - bloodFreq[a]).forEach(b => {
            const count = bloodFreq[b];
            const percent = Math.round((count / allStudents.length) * 100);
            const color = bloodColors[b] || "#3b82f6";

            const barItem = document.createElement("div");
            barItem.className = "bar-item";
            barItem.title = `Click to filter students with ${b} blood group`;
            barItem.onclick = () => filterByAnalyticsBlood(b);

            barItem.innerHTML = `
                <div class="bar-info">
                    <span>🩸 ${b}</span>
                    <span>${count} students (${percent}%)</span>
                </div>
                <div class="bar-track">
                    <div class="bar-fill" style="width: ${percent}%; background: ${color};"></div>
                </div>
            `;
            bloodContainer.appendChild(barItem);
        });
    }

    // 3. District / Hometown Representation
    const distFreq = {};
    allStudents.forEach(s => {
        if (s.hometown && s.hometown.trim()) {
            const d = s.hometown.trim();
            distFreq[d] = (distFreq[d] || 0) + 1;
        }
    });

    const distContainer = document.getElementById("districtListContainer");
    if (distContainer) {
        distContainer.innerHTML = "";
        Object.keys(distFreq).sort((a,b) => distFreq[b] - distFreq[a]).forEach(d => {
            const pill = document.createElement("div");
            pill.className = "district-pill";
            pill.title = `Click to filter students from ${d}`;
            pill.onclick = () => filterByAnalyticsDistrict(d);
            pill.innerHTML = `📍 ${d} <strong>${distFreq[d]}</strong>`;
            distContainer.appendChild(pill);
        });
    }
}

function filterByAnalyticsBlood(bloodGroup) {
    switchTab("students");
    if (bloodFilter) {
        bloodFilter.value = bloodGroup === "Unknown" ? "all" : bloodGroup;
    }
    applyFilters();
}

function filterByAnalyticsDistrict(district) {
    switchTab("students");
    if (hometownFilter) {
        hometownFilter.value = district;
    }
    applyFilters();
}

// ================= 9. BROADCAST MAILER (EMAIL ALL) =================
function emailAllClassmates() {
    const emails = allStudents
        .map(s => s.email && s.email.trim())
        .filter(Boolean);

    if (emails.length === 0) {
        showToast("⚠️ No student emails found.");
        return;
    }

    const bccList = emails.join(",");
    const subject = encodeURIComponent("UAP CSE Batch 54 (Section B) - Class Announcement / Notice");

    const gmailBtn = document.getElementById("gmailAllBtn");
    if (gmailBtn) {
        gmailBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&bcc=${encodeURIComponent(bccList)}&su=${subject}`;
    }

    const defaultMailBtn = document.getElementById("defaultMailAllBtn");
    if (defaultMailBtn) {
        defaultMailBtn.href = `mailto:?bcc=${bccList}&subject=${subject}`;
    }

    const textarea = document.getElementById("allEmailsTextarea");
    if (textarea) {
        textarea.value = emails.join(", ");
    }

    const emailModal = document.getElementById("emailAllModal");
    if (emailModal) {
        emailModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeEmailAllModal() {
    const emailModal = document.getElementById("emailAllModal");
    if (emailModal) emailModal.style.display = "none";
    document.body.style.overflow = "";
}

function copyAllEmails() {
    const emails = allStudents
        .map(s => s.email && s.email.trim())
        .filter(Boolean);

    if (emails.length === 0) return;

    const emailText = emails.join(", ");
    copyTextToClipboard(emailText, `Copied all ${emails.length} student emails to clipboard!`);
}

function copyTextToClipboard(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`✅ ${successMessage}`);
        }).catch(() => fallbackCopy(text, successMessage));
    } else {
        fallbackCopy(text, successMessage);
    }
}

function fallbackCopy(text, successMessage) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast(`✅ ${successMessage}`);
}

function showToast(message) {
    let toast = document.getElementById("toastNotification");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toastNotification";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
}

// ================= 10. CONFETTI CELEBRATION ENGINE =================
function fireConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#f59e0b", "#ec4899", "#38bdf8", "#22c55e", "#a855f7", "#ffffff", "#ef4444"];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            speedY: Math.random() * 5 + 3,
            speedX: Math.random() * 4 - 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }

    showToast("🎉 Celebrating UAP CSE Batch 54, Section B!");

    let animationId;
    let frames = 0;

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        frames++;

        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
            ctx.restore();
        });

        if (frames < 180) {
            animationId = requestAnimationFrame(render);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationId);
        }
    }

    render();
}

// ================= 11. TAB NAVIGATION & SCROLL =================
function switchTab(tabName) {
    document.querySelectorAll(".tab-content").forEach(el => {
        el.style.display = "none";
        el.classList.remove("active");
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    const targetSection = document.getElementById(`${tabName}Section`);
    if (targetSection) {
        targetSection.style.display = "block";
        targetSection.classList.add("active");
    }

    const targetBtn = document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Btn`);
    if (targetBtn) {
        targetBtn.classList.add("active");
    }

    window.scrollTo({ top: 120, behavior: "smooth" });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Memory / Event photo modal viewer
function openMemoryModal(photoUrl, title) {
    const modal = document.getElementById("imageModal");
    if (!modal) return;

    toggleStudentIdCard(false);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    const modalImg = document.getElementById("modalImg");
    if (modalImg) {
        modalImg.src = photoUrl;
        modalImg.alt = title;
    }

    const titleEl = document.getElementById("modalTitle");
    if (titleEl) titleEl.textContent = title;

    const bloodTag = document.getElementById("modalBloodTag");
    if (bloodTag) bloodTag.style.display = "none";

    const nameEl = document.querySelector("#modalName span");
    if (nameEl) nameEl.textContent = title;

    const emailTextEl = document.getElementById("modalEmailText");
    if (emailTextEl) emailTextEl.textContent = "uap-cse-54b@uap-bd.edu";

    const hometownEl = document.querySelector("#modalHometown span");
    if (hometownEl) hometownEl.textContent = "University of Asia Pacific";

    const mobileEl = document.querySelector("#modalMobile span");
    if (mobileEl) mobileEl.textContent = "CSE Batch 54, Section B Memories";

    const bioEl = document.querySelector("#modalBio span");
    if (bioEl) bioEl.textContent = "Cherished campus moments captured with classmates.";

    const gmailBtn = document.getElementById("modalGmailBtn");
    const copyEmailBtn = document.getElementById("modalCopyEmailBtn");
    const callBtn = document.getElementById("modalCallBtn");
    const waBtn = document.getElementById("modalWaBtn");
    const vcfBtn = document.getElementById("modalVcfBtn");
    if (gmailBtn) gmailBtn.style.display = "none";
    if (copyEmailBtn) copyEmailBtn.style.display = "none";
    if (callBtn) callBtn.style.display = "none";
    if (waBtn) waBtn.style.display = "none";
    if (vcfBtn) vcfBtn.style.display = "none";
}

// ================= 12. EVENT LISTENERS =================
function setupEventListeners() {
    if (searchInput) {
        searchInput.addEventListener("input", applyFilters);
    }

    if (bloodFilter) {
        bloodFilter.addEventListener("change", applyFilters);
    }

    if (hometownFilter) {
        hometownFilter.addEventListener("change", applyFilters);
    }

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", resetAllFilters);
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            applyFilters();
        });
    }

    // Back to top scroll listener
    const bttBtn = document.getElementById("backToTopBtn");
    window.addEventListener("scroll", () => {
        if (bttBtn) {
            if (window.scrollY > 350) {
                bttBtn.classList.add("show");
            } else {
                bttBtn.classList.remove("show");
            }
        }
    });

    // Modal click outside to close
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("imageModal");
        if (e.target === modal) closeModal();
        const emailAllModal = document.getElementById("emailAllModal");
        if (e.target === emailAllModal) closeEmailAllModal();
        const memFormModal = document.getElementById("memoryFormModal");
        if (e.target === memFormModal) closeMemoryFormModal();
        const memViewModal = document.getElementById("memoryViewerModal");
        if (e.target === memViewModal) closeMemoryViewerModal();
        const coverModal = document.getElementById("coverPageModal");
        if (e.target === coverModal) closeCoverPageModal();
    });

    // ESC to close modals
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
            closeEmailAllModal();
            closeMemoryFormModal();
            closeMemoryViewerModal();
            closeCoverPageModal();
        }
    });
}




// ================= 13. CAMPUS MEMORIES (ADD, EDIT, DELETE, VIEW) =================
const defaultMemories = [
    {
        id: "mem-1",
        title: "Campus Hangout & Moments",
        date: "Spring 2024",
        description: "Cherished moments relaxing and hanging out in the UAP campus plaza after classes.",
        photo: "Photo/background 1.png"
    },
    {
        id: "mem-2",
        title: "Batch Tour & Get Together",
        date: "Fall 2024",
        description: "Unforgettable memories from our Section B annual batch tour and excursion.",
        photo: "Photo/background 2.avif"
    },
    {
        id: "mem-3",
        title: "CSE Lab & Study Sessions",
        date: "2024 - 2025",
        description: "Late afternoon coding, lab assignments, and group projects at the CSE department.",
        photo: "Photo/background 3.jpg"
    },
    {
        id: "mem-4",
        title: "Department Events & Celebrations",
        date: "2025",
        description: "Celebrating festivals, CSE week, and cultural events together as Batch 54.",
        photo: "Photo/background 4.jpg"
    }
];

let allMemories = [];
let currentMemoryPhotoData = "";

function initMemories() {
    try {
        const stored = localStorage.getItem("uap_memories");
        if (stored) {
            allMemories = JSON.parse(stored);
        } else {
            allMemories = JSON.parse(JSON.stringify(defaultMemories));
            saveMemoriesToStorage();
        }
    } catch (e) {
        allMemories = JSON.parse(JSON.stringify(defaultMemories));
    }
    renderMemories();
}

function saveMemoriesToStorage() {
    try {
        localStorage.setItem("uap_memories", JSON.stringify(allMemories));
    } catch (e) {
        console.warn("Storage quota exceeded, could not persist all memories:", e);
    }
}

function renderMemories() {
    const grid = document.getElementById("memoriesGrid");
    const noMemMsg = document.getElementById("noMemoriesMsg");
    const countPill = document.getElementById("memoriesCountPill");

    if (countPill) {
        const suffix = (currentLanguage === "bn") ? "টি স্মৃতি সংগৃহীত" : "Memories Captured";
        countPill.textContent = `📸 ${allMemories.length} ${suffix}`;
    }

    if (!grid) return;
    grid.innerHTML = "";

    if (allMemories.length === 0) {
        grid.style.display = "none";
        if (noMemMsg) noMemMsg.style.display = "block";
        return;
    }

    grid.style.display = "grid";
    if (noMemMsg) noMemMsg.style.display = "none";

    allMemories.forEach(mem => {
        const card = document.createElement("div");
        card.className = "memory-card";

        const titleEscaped = (mem.title || "").replace(/'/g, "\\'");
        const dateTag = mem.date ? `<span class="memory-date-tag">📅 ${mem.date}</span>` : "";

        card.innerHTML = `
            <div class="memory-thumb-wrapper" onclick="openMemoryViewerModal('${mem.id}')">
                <img src="${mem.photo}" alt="${mem.title}" loading="lazy" onerror="this.src='Photo/background 1.png'">
                ${dateTag}
                <div class="memory-hover-overlay">
                    <span>🔍 Click to view full image</span>
                </div>
            </div>
            <div class="memory-content">
                <h3 class="memory-title" onclick="openMemoryViewerModal('${mem.id}')">${mem.title}</h3>
                <p class="memory-desc">${mem.description || 'Campus memory from UAP CSE Batch 54.'}</p>
                <div class="memory-footer-actions">
                    <button class="btn-mem-action btn-mem-view" onclick="openMemoryViewerModal('${mem.id}')" title="View Full Photo">
                        👁️ View
                    </button>
                    <button class="btn-mem-action btn-mem-edit" onclick="openEditMemoryModal('${mem.id}')" title="Edit Title, Date or Photo">
                        ✏️ Edit
                    </button>
                    <button class="btn-mem-action btn-mem-delete" onclick="deleteMemory('${mem.id}')" title="Delete Memory">
                        🗑️ Delete
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

function openAddMemoryModal() {
    const modal = document.getElementById("memoryFormModal");
    if (!modal) return;

    document.getElementById("memoryEditId").value = "";
    document.getElementById("memInputTitle").value = "";
    document.getElementById("memInputDate").value = "";
    document.getElementById("memInputDesc").value = "";
    document.getElementById("memInputFile").value = "";
    document.getElementById("memInputUrl").value = "";
    currentMemoryPhotoData = "";

    const titleEl = document.getElementById("memoryFormTitle");
    if (titleEl) {
        titleEl.textContent = currentLanguage === "bn" ? "নতুন ক্যাম্পাস মেমোরি যোগ করুন" : "Add New Campus Memory";
    }

    updateMemoryPreview("");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function openEditMemoryModal(id) {
    const memory = allMemories.find(m => m.id === id);
    if (!memory) return;

    closeMemoryViewerModal();

    const modal = document.getElementById("memoryFormModal");
    if (!modal) return;

    document.getElementById("memoryEditId").value = memory.id;
    document.getElementById("memInputTitle").value = memory.title || "";
    document.getElementById("memInputDate").value = memory.date || "";
    document.getElementById("memInputDesc").value = memory.description || "";
    document.getElementById("memInputFile").value = "";

    const urlInput = document.getElementById("memInputUrl");
    if (urlInput) {
        urlInput.value = memory.photo.startsWith("data:") ? "" : memory.photo;
    }

    currentMemoryPhotoData = memory.photo;

    const titleEl = document.getElementById("memoryFormTitle");
    if (titleEl) {
        titleEl.textContent = currentLanguage === "bn" ? "মেমোরি সম্পাদনা করুন" : "Edit Campus Memory";
    }

    updateMemoryPreview(memory.photo);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeMemoryFormModal() {
    const modal = document.getElementById("memoryFormModal");
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "";
}

function handleMemoryFileSelect(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
        showToast("⚠️ Image size is too large (Max: 8MB)");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        currentMemoryPhotoData = e.target.result;
        updateMemoryPreview(currentMemoryPhotoData);
        const urlInput = document.getElementById("memInputUrl");
        if (urlInput) urlInput.value = "";
    };
    reader.readAsDataURL(file);
}

function handleMemoryUrlInput(event) {
    const val = event.target.value.trim();
    if (val) {
        currentMemoryPhotoData = val;
        updateMemoryPreview(val);
        const fileInput = document.getElementById("memInputFile");
        if (fileInput) fileInput.value = "";
    }
}

function updateMemoryPreview(photoUrl) {
    const img = document.getElementById("memPreviewImg");
    const placeholder = document.getElementById("memPreviewPlaceholder");

    if (photoUrl && photoUrl.trim() !== "") {
        if (img) {
            img.src = photoUrl;
            img.style.display = "block";
        }
        if (placeholder) placeholder.style.display = "none";
    } else {
        if (img) {
            img.src = "";
            img.style.display = "none";
        }
        if (placeholder) placeholder.style.display = "block";
    }
}

function resizeImageBeforeSave(dataUrl, maxWidth = 1200, maxHeight = 900, quality = 0.82) {
    return new Promise((resolve) => {
        if (!dataUrl || !dataUrl.startsWith("data:image/")) {
            return resolve(dataUrl);
        }
        const img = new Image();
        img.onload = () => {
            let width = img.width;
            let height = img.height;

            if (width > maxWidth || height > maxHeight) {
                if (width / height > maxWidth / maxHeight) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                } else {
                    width = Math.round((width * maxHeight) / height);
                    height = maxHeight;
                }
            }

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            const compressed = canvas.toDataURL("image/jpeg", quality);
            resolve(compressed);
        };
        img.onerror = () => resolve(dataUrl);
        img.src = dataUrl;
    });
}

async function handleMemoryFormSubmit(event) {
    event.preventDefault();

    const titleInput = document.getElementById("memInputTitle");
    const dateInput = document.getElementById("memInputDate");
    const descInput = document.getElementById("memInputDesc");
    const editIdInput = document.getElementById("memoryEditId");

    const title = titleInput ? titleInput.value.trim() : "";
    const date = dateInput ? dateInput.value.trim() : "";
    const desc = descInput ? descInput.value.trim() : "";
    const editId = editIdInput ? editIdInput.value.trim() : "";

    if (!title) {
        showToast("⚠️ Please enter a title for the memory.");
        return;
    }

    if (!currentMemoryPhotoData) {
        showToast("⚠️ Please select an image or enter a photo URL.");
        return;
    }

    // Compress if base64 dataUrl
    const finalPhoto = await resizeImageBeforeSave(currentMemoryPhotoData);

    if (editId) {
        // Edit existing
        const idx = allMemories.findIndex(m => m.id === editId);
        if (idx !== -1) {
            allMemories[idx].title = title;
            allMemories[idx].date = date;
            allMemories[idx].description = desc;
            allMemories[idx].photo = finalPhoto;
            showToast("✅ Memory updated successfully!");
        }
    } else {
        // Add new
        const newMem = {
            id: "mem-" + Date.now(),
            title: title,
            date: date || new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
            description: desc,
            photo: finalPhoto
        };
        allMemories.unshift(newMem);
        showToast("🎉 New campus memory added!");
    }

    saveMemoriesToStorage();
    renderMemories();
    closeMemoryFormModal();
}

function deleteMemory(id) {
    const memory = allMemories.find(m => m.id === id);
    const title = memory ? `"${memory.title}"` : "this memory";

    const confirmMsg = currentLanguage === "bn" ? 
        `আপনি কি নিশ্চিত যে ${title} মুছে ফেলতে চান?` : 
        `Are you sure you want to delete ${title}?`;

    if (!confirm(confirmMsg)) return;

    allMemories = allMemories.filter(m => m.id !== id);
    saveMemoriesToStorage();
    renderMemories();
    closeMemoryViewerModal();
    showToast(currentLanguage === "bn" ? "🗑️ মেমোরি সফলভাবে মুছে ফেলা হয়েছে!" : "🗑️ Memory deleted successfully!");
}

function restoreDefaultMemories() {
    const confirmMsg = currentLanguage === "bn" ? 
        "আপনি কি ডিফল্ট ক্যাম্পাস মেমোরিগুলো রিস্টোর করতে চান?" : 
        "Are you sure you want to restore the default campus memories?";

    if (!confirm(confirmMsg)) return;

    allMemories = JSON.parse(JSON.stringify(defaultMemories));
    saveMemoriesToStorage();
    renderMemories();
    showToast(currentLanguage === "bn" ? "🔄 ডিফল্ট মেমোরি রিস্টোর করা হয়েছে!" : "🔄 Restored default campus memories!");
}

// Viewer modal for single memory in detail
function openMemoryViewerModal(id) {
    const memory = allMemories.find(m => m.id === id);
    if (!memory) return;

    const modal = document.getElementById("memoryViewerModal");
    if (!modal) return;

    const img = document.getElementById("viewerImg");
    if (img) {
        img.src = memory.photo;
        img.alt = memory.title;
    }

    const titleEl = document.getElementById("viewerTitle");
    if (titleEl) titleEl.textContent = memory.title;

    const dateTag = document.getElementById("viewerDateTag");
    if (dateTag) dateTag.textContent = memory.date ? `📅 ${memory.date}` : "📅 Campus Memory";

    const descEl = document.getElementById("viewerDesc");
    if (descEl) descEl.textContent = memory.description || "Cherished campus moments captured with classmates.";

    const editBtn = document.getElementById("viewerEditBtn");
    if (editBtn) {
        editBtn.onclick = () => openEditMemoryModal(memory.id);
    }

    const delBtn = document.getElementById("viewerDeleteBtn");
    if (delBtn) {
        delBtn.onclick = () => deleteMemory(memory.id);
    }

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeMemoryViewerModal() {
    const modal = document.getElementById("memoryViewerModal");
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "";
}


// ================= 14. UAP CSE COVER PAGE GENERATOR =================
function initCoverPageGenerator() {
    const dateInput = document.getElementById("coverSubmissionDate");
    if (dateInput && !dateInput.value) {
        const today = new Date();
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        dateInput.value = today.toLocaleDateString('en-US', options);
    }
}

function openCoverPageModal() {
    const modal = document.getElementById("coverPageModal");
    if (!modal) return;

    initCoverPageGenerator();
    populateCoverStudentDropdown();
    updateCoverPreview();

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeCoverPageModal() {
    const modal = document.getElementById("coverPageModal");
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "";
}

function populateCoverStudentDropdown() {
    const select = document.getElementById("coverStudentSelect");
    if (!select) return;

    // Keep the first default option
    select.innerHTML = '<option value="">-- Choose a Classmate to Autofill (Batch 54) --</option>';

    const sorted = [...allStudents].sort((a,b) => (parseInt(a.roll) || 999) - (parseInt(b.roll) || 999));

    sorted.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s.id;
        opt.textContent = `Roll ${s.roll || '--'} • ${s.name} (${s.registrationId || '--'})`;
        select.appendChild(opt);
    });
}

function handleCoverStudentSelect(studentId) {
    if (!studentId) return;
    const student = allStudents.find(s => String(s.id) === String(studentId));
    if (!student) return;

    const nameInput = document.getElementById("coverStudentName");
    const regInput = document.getElementById("coverStudentReg");
    const rollInput = document.getElementById("coverStudentRoll");
    const batchInput = document.getElementById("coverStudentBatch");
    const secInput = document.getElementById("coverStudentSection");
    const semInput = document.getElementById("coverStudentSemester");

    if (nameInput) nameInput.value = student.name || "";
    if (regInput) regInput.value = student.registrationId || "";
    if (rollInput) rollInput.value = student.roll || "";
    if (batchInput) batchInput.value = "54";
    if (secInput) secInput.value = "B";
    if (semInput && !semInput.value) semInput.value = "2nd Year, 1st Semester";

    updateCoverPreview();
    showToast(`⚡ Autofilled cover page for ${student.name}`);
}

function handleCoverCourseSelect(val) {
    if (!val || val === "custom") return;
    const parts = val.split("|");
    if (parts.length === 2) {
        const codeInput = document.getElementById("coverCourseCode");
        const titleInput = document.getElementById("coverCourseTitle");
        if (codeInput) codeInput.value = parts[0];
        if (titleInput) titleInput.value = parts[1];
        updateCoverPreview();
    }
}

function updateCoverPreview() {
    const previewSheet = document.getElementById("coverPagePreviewSheet");
    if (!previewSheet) return;

    const reportType = (document.getElementById("coverReportType")?.value || "ASSIGNMENT").toUpperCase();
    const reportNo = document.getElementById("coverReportNo")?.value || "01";
    const title = document.getElementById("coverAssignmentTitle")?.value || "Assignment Topic Title";
    const courseCode = document.getElementById("coverCourseCode")?.value || "CSE 207";
    const courseTitle = document.getElementById("coverCourseTitle")?.value || "Algorithms";

    const teacherName = document.getElementById("coverTeacherName")?.value || "Course Teacher Name";
    const teacherDesig = document.getElementById("coverTeacherDesignation")?.value || "Lecturer";

    const studentName = document.getElementById("coverStudentName")?.value || "Student Name";
    const studentReg = document.getElementById("coverStudentReg")?.value || "23201000";
    const studentRoll = document.getElementById("coverStudentRoll")?.value || "00";
    const studentBatch = document.getElementById("coverStudentBatch")?.value || "54";
    const studentSec = document.getElementById("coverStudentSection")?.value || "B";
    const studentSem = document.getElementById("coverStudentSemester")?.value || "2nd Year, 1st Semester";
    const subDate = document.getElementById("coverSubmissionDate")?.value || "";

    const showTable = document.getElementById("coverShowEvaluationTable")?.checked ?? true;
    const borderStyle = document.getElementById("coverBorderStyle")?.value || "double";

    // Set border classes
    previewSheet.className = `cover-sheet a4-page border-${borderStyle}`;

    previewSheet.innerHTML = `
        <div class="cover-header">
            <img src="Photo/uap-logo.svg" alt="UAP Logo" class="cover-uap-logo" onerror="this.style.display='none'">
            <h1 class="cover-uni-name">UNIVERSITY OF ASIA PACIFIC</h1>
            <h2 class="cover-dept-name">Department of Computer Science and Engineering</h2>
            <h3 class="cover-prog-name">Program: B.Sc. in Computer Science and Engineering (CSE)</h3>
        </div>

        <div class="cover-divider"></div>

        <div class="cover-title-section">
            <div class="cover-report-badge">${reportType}</div>
            <h2 class="cover-assignment-title">${title}</h2>
            <p class="cover-report-no"><strong>${reportType === 'LAB REPORT' ? 'Experiment' : 'Assignment'} No:</strong> ${reportNo}</p>
            <div class="cover-course-box">
                <p><strong>Course Code:</strong> ${courseCode}</p>
                <p><strong>Course Title:</strong> ${courseTitle}</p>
            </div>
        </div>

        <div class="cover-divider-thin"></div>

        <div class="cover-parties-grid">
            <div class="cover-submitted-to">
                <h4>Submitted To:</h4>
                <p class="cover-party-name">${teacherName}</p>
                <p class="cover-party-detail">${teacherDesig}</p>
                <p class="cover-party-detail">Department of CSE</p>
                <p class="cover-party-detail">University of Asia Pacific</p>
            </div>

            <div class="cover-submitted-by">
                <h4>Submitted By:</h4>
                <p class="cover-party-name">${studentName}</p>
                <p class="cover-party-detail"><strong>Registration ID:</strong> ${studentReg}</p>
                <p class="cover-party-detail"><strong>Class Roll:</strong> ${studentRoll}</p>
                <p class="cover-party-detail"><strong>Batch:</strong> ${studentBatch} | <strong>Section:</strong> ${studentSec}</p>
                <p class="cover-party-detail"><strong>Year / Semester:</strong> ${studentSem}</p>
                <p class="cover-party-detail">Department of CSE, UAP</p>
            </div>
        </div>

        ${showTable ? `
        <div class="cover-evaluation-box">
            <table>
                <thead>
                    <tr>
                        <th style="text-align:left; padding-left:10px;">Assessment Criteria</th>
                        <th style="width:25%;">Maximum Marks</th>
                        <th style="width:25%;">Marks Obtained</th>
                        <th style="width:25%;">Teacher's Signature</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align:left; padding-left:10px;">Timely Submission</td>
                        <td>02</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style="text-align:left; padding-left:10px;">Content &amp; Accuracy</td>
                        <td>06</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style="text-align:left; padding-left:10px;">Presentation &amp; Format</td>
                        <td>02</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="eval-total">
                        <td style="text-align:left; padding-left:10px;"><strong>Total</strong></td>
                        <td><strong>10</strong></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        ` : ''}

        <div class="cover-footer">
            <p class="cover-submission-date"><strong>Date of Submission:</strong> ${subDate || '--'}</p>
        </div>
    `;
}

function printCoverPage() {
    updateCoverPreview();
    window.print();
}

function downloadCoverPageWord() {
    updateCoverPreview();

    const reportType = (document.getElementById("coverReportType")?.value || "ASSIGNMENT").toUpperCase();
    const reportNo = document.getElementById("coverReportNo")?.value || "01";
    const title = document.getElementById("coverAssignmentTitle")?.value || "Assignment";
    const courseCode = document.getElementById("coverCourseCode")?.value || "CSE 207";
    const courseTitle = document.getElementById("coverCourseTitle")?.value || "Algorithms";

    const teacherName = document.getElementById("coverTeacherName")?.value || "Instructor Name";
    const teacherDesig = document.getElementById("coverTeacherDesignation")?.value || "Lecturer";

    const studentName = document.getElementById("coverStudentName")?.value || "Student Name";
    const studentReg = document.getElementById("coverStudentReg")?.value || "--";
    const studentRoll = document.getElementById("coverStudentRoll")?.value || "--";
    const studentBatch = document.getElementById("coverStudentBatch")?.value || "54";
    const studentSec = document.getElementById("coverStudentSection")?.value || "B";
    const studentSem = document.getElementById("coverStudentSemester")?.value || "2nd Year, 1st Semester";
    const subDate = document.getElementById("coverSubmissionDate")?.value || "";
    const showTable = document.getElementById("coverShowEvaluationTable")?.checked ?? true;

    const wordContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>UAP CSE Cover Page</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
</w:WordDocument>
</xml>
<![endif]-->
<style>
@page {
    size: 21.0cm 29.7cm;
    margin: 2.54cm;
    mso-page-orientation: portrait;
}
body {
    font-family: 'Times New Roman', serif;
    font-size: 12pt;
    color: #000000;
    line-height: 1.35;
    text-align: center;
}
.border-frame {
    border: 4.5pt double #002b49;
    padding: 24pt 20pt;
    min-height: 820pt;
    box-sizing: border-box;
}
.uni-title {
    font-size: 18pt;
    font-weight: bold;
    color: #002b49;
    margin: 0 0 4pt 0;
    letter-spacing: 1pt;
}
.dept-title {
    font-size: 14pt;
    font-weight: bold;
    color: #000000;
    margin: 0 0 3pt 0;
}
.prog-title {
    font-size: 11pt;
    color: #333333;
    margin: 0 0 14pt 0;
}
.divider {
    border-bottom: 2pt solid #002b49;
    margin: 10pt auto 16pt auto;
    width: 90%;
}
.report-badge {
    display: inline-block;
    font-size: 13pt;
    font-weight: bold;
    color: #002b49;
    border: 1.5pt solid #002b49;
    padding: 4pt 16pt;
    margin: 10pt 0 14pt 0;
}
.assignment-title {
    font-size: 16pt;
    font-weight: bold;
    color: #000000;
    margin: 8pt 0;
}
.assignment-no {
    font-size: 12pt;
    color: #333333;
    margin: 4pt 0 12pt 0;
}
.course-info {
    font-size: 12.5pt;
    color: #000000;
    margin: 8pt 0 18pt 0;
}
table.parties-table {
    width: 100%;
    margin: 20pt 0;
    border: none;
    text-align: left;
}
table.parties-table td {
    vertical-align: top;
    width: 50%;
    font-size: 11.5pt;
    padding: 6pt;
    border: none;
}
.party-heading {
    font-size: 12.5pt;
    font-weight: bold;
    color: #002b49;
    text-decoration: underline;
    margin-bottom: 6pt;
}
.party-name {
    font-size: 12pt;
    font-weight: bold;
    color: #000000;
    margin: 2pt 0;
}
table.eval-table {
    width: 100%;
    border-collapse: collapse;
    margin: 18pt 0;
    text-align: center;
    font-size: 10.5pt;
}
table.eval-table th, table.eval-table td {
    border: 1pt solid #444444;
    padding: 5pt;
}
table.eval-table th {
    background-color: #f2f2f2;
    font-weight: bold;
    color: #002b49;
}
.sub-date {
    font-size: 12.5pt;
    font-weight: bold;
    color: #002b49;
    margin-top: 24pt;
}
</style>
</head>
<body>
<div class="border-frame">
    <div class="uni-title">UNIVERSITY OF ASIA PACIFIC</div>
    <div class="dept-title">Department of Computer Science and Engineering</div>
    <div class="prog-title">Program: B.Sc. in Computer Science and Engineering (CSE)</div>

    <div class="divider"></div>

    <div class="report-badge">${reportType}</div>
    <div class="assignment-title">${title}</div>
    <div class="assignment-no"><strong>${reportType === 'LAB REPORT' ? 'Experiment' : 'Assignment'} No:</strong> ${reportNo}</div>

    <div class="course-info">
        <p><strong>Course Code:</strong> ${courseCode}</p>
        <p><strong>Course Title:</strong> ${courseTitle}</p>
    </div>

    <table class="parties-table">
        <tr>
            <td>
                <div class="party-heading">Submitted To:</div>
                <div class="party-name">${teacherName}</div>
                <div>${teacherDesig}</div>
                <div>Department of CSE</div>
                <div>University of Asia Pacific</div>
            </td>
            <td>
                <div class="party-heading">Submitted By:</div>
                <div class="party-name">${studentName}</div>
                <div><strong>Registration ID:</strong> ${studentReg}</div>
                <div><strong>Class Roll:</strong> ${studentRoll}</div>
                <div><strong>Batch:</strong> ${studentBatch} | <strong>Section:</strong> ${studentSec}</div>
                <div><strong>Year / Semester:</strong> ${studentSem}</div>
                <div>Department of CSE, UAP</div>
            </td>
        </tr>
    </table>

    ${showTable ? `
    <table class="eval-table">
        <thead>
            <tr>
                <th style="text-align:left; padding-left:10pt;">Assessment Criteria</th>
                <th>Maximum Marks</th>
                <th>Marks Obtained</th>
                <th>Teacher's Signature</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align:left; padding-left:10pt;">Timely Submission</td>
                <td>02</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td style="text-align:left; padding-left:10pt;">Content &amp; Accuracy</td>
                <td>06</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td style="text-align:left; padding-left:10pt;">Presentation &amp; Format</td>
                <td>02</td>
                <td></td>
                <td></td>
            </tr>
            <tr style="font-weight:bold; background-color:#f9f9f9;">
                <td style="text-align:left; padding-left:10pt;">Total</td>
                <td>10</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    ` : ''}

    <div class="sub-date">
        <strong>Date of Submission:</strong> ${subDate || '--'}
    </div>
</div>
</body>
</html>
    `;

    const blob = new Blob(['\ufeff' + wordContent], { type: 'application/msword;charset=utf-8' });
    const filename = `${studentName.replace(/\s+/g, '_')}_${courseCode.replace(/\s+/g, '_')}_Cover_Page.doc`;
    triggerFileDownload(blob, filename);
    showToast("💾 Saved official Cover Page as Microsoft Word (.doc) file!");
}

function copyCoverPageText() {
    const reportType = (document.getElementById("coverReportType")?.value || "ASSIGNMENT").toUpperCase();
    const reportNo = document.getElementById("coverReportNo")?.value || "01";
    const title = document.getElementById("coverAssignmentTitle")?.value || "Assignment Title";
    const courseCode = document.getElementById("coverCourseCode")?.value || "CSE 207";
    const courseTitle = document.getElementById("coverCourseTitle")?.value || "Algorithms";

    const teacherName = document.getElementById("coverTeacherName")?.value || "Teacher Name";
    const teacherDesig = document.getElementById("coverTeacherDesignation")?.value || "Lecturer";

    const studentName = document.getElementById("coverStudentName")?.value || "Student Name";
    const studentReg = document.getElementById("coverStudentReg")?.value || "--";
    const studentRoll = document.getElementById("coverStudentRoll")?.value || "--";
    const studentBatch = document.getElementById("coverStudentBatch")?.value || "54";
    const studentSec = document.getElementById("coverStudentSection")?.value || "B";
    const studentSem = document.getElementById("coverStudentSemester")?.value || "2nd Year, 1st Semester";
    const subDate = document.getElementById("coverSubmissionDate")?.value || "--";

    const plainText = `===============================================================
                 UNIVERSITY OF ASIA PACIFIC
        Department of Computer Science and Engineering
    Program: B.Sc. in Computer Science & Engineering (CSE)
===============================================================

[ ${reportType} ]
Topic / Title: ${title}
${reportType === 'LAB REPORT' ? 'Experiment' : 'Assignment'} No: ${reportNo}
Course Code: ${courseCode}
Course Title: ${courseTitle}

---------------------------------------------------------------
Submitted To:
---------------------------------------------------------------
Name: ${teacherName}
Designation: ${teacherDesig}
Department of CSE, University of Asia Pacific

---------------------------------------------------------------
Submitted By:
---------------------------------------------------------------
Name: ${studentName}
Registration ID: ${studentReg}
Class Roll: ${studentRoll}
Batch: ${studentBatch} | Section: ${studentSec}
Year / Semester: ${studentSem}
Department of CSE, University of Asia Pacific

---------------------------------------------------------------
Date of Submission: ${subDate}
===============================================================`;

    copyTextToClipboard(plainText, "Copied standard Cover Page text template!");
}

function resetCoverPageForm() {
    document.getElementById("coverReportType").value = "ASSIGNMENT";
    document.getElementById("coverReportNo").value = "01";
    document.getElementById("coverAssignmentTitle").value = "Implementation of Data Structures and Graph Algorithms";
    document.getElementById("coverCourseQuickSelect").value = "CSE 207|Algorithms";
    document.getElementById("coverCourseCode").value = "CSE 207";
    document.getElementById("coverCourseTitle").value = "Algorithms";
    document.getElementById("coverTeacherName").value = "Course Instructor Name";
    document.getElementById("coverTeacherDesignation").value = "Lecturer";
    document.getElementById("coverStudentName").value = "Mijanur Rahman Sowrov";
    document.getElementById("coverStudentReg").value = "23201110";
    document.getElementById("coverStudentRoll").value = "110";
    document.getElementById("coverStudentBatch").value = "54";
    document.getElementById("coverStudentSection").value = "B";
    document.getElementById("coverStudentSemester").value = "2nd Year, 1st Semester";
    document.getElementById("coverShowEvaluationTable").checked = true;
    document.getElementById("coverBorderStyle").value = "double";

    const today = new Date();
    document.getElementById("coverSubmissionDate").value = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    updateCoverPreview();
    showToast("🔄 Reset cover page to standard template!");
}



// ================= 15. DEPARTMENT DETAILS & FACULTY DIRECTORY =================
let allFaculty = [];

async function initFaculty() {
    try {
        const response = await fetch("faculty.json");
        if (response.ok) {
            allFaculty = await response.json();
        }
    } catch (e) {
        console.warn("Could not load faculty.json:", e);
    }

    renderFaculty(allFaculty);
    populateCoverTeacherDropdown();
    setupFacultyEventListeners();
}

function renderFaculty(facultyList) {
    const grid = document.getElementById("facultyGrid");
    const countEl = document.getElementById("facultyResultsCount");
    const noResultsMsg = document.getElementById("noFacultyResultsMsg");

    if (countEl) {
        countEl.textContent = `Showing ${facultyList.length} of ${allFaculty.length} Active Faculty Members`;
    }

    if (!grid) return;
    grid.innerHTML = "";

    if (facultyList.length === 0) {
        grid.style.display = "none";
        if (noResultsMsg) noResultsMsg.style.display = "block";
        return;
    }

    grid.style.display = "grid";
    if (noResultsMsg) noResultsMsg.style.display = "none";

    facultyList.forEach(f => {
        const card = document.createElement("div");
        card.className = "faculty-card";

        const hasPhone = f.phone && f.phone.trim() !== "" && f.phone !== "None";
        const hasEmail = f.email && f.email.trim() !== "";
        const gmailUrl = hasEmail ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(f.email)}` : "";
        const cleanPhone = hasPhone ? f.phone.replace(/[^0-9+]/g, '') : "";

        const statusClass = f.status.toLowerCase() === "active" ? "active" : "on-leave";
        const qualBadge = f.qualification ? `<span class="qual-badge">${f.qualification}</span>` : "";
        const citBadge = f.citations ? `<span class="citation-badge">📊 ${f.citations} citations</span>` : "";

        card.innerHTML = `
            <div class="faculty-img-wrapper">
                <img src="${f.photo}" alt="${f.name}" loading="lazy" onerror="this.src='Photo/default-student.svg'">
                <div class="faculty-badges-row">
                    <span class="status-badge ${statusClass}">${f.status}</span>
                    ${qualBadge}
                </div>
                ${citBadge}
            </div>
            <div class="faculty-body">
                <div class="faculty-name-title">
                    <h3>${f.name}</h3>
                    <p class="faculty-desig-text">${f.designation}</p>
                </div>
                ${f.bio ? `<p class="faculty-bio-snippet">${f.bio}</p>` : ''}
                <div class="faculty-footer-actions">
                    ${hasEmail ? `
                        <a href="${gmailUrl}" target="_blank" class="btn-fac-action btn-fac-email" title="Send email to ${f.name}">
                            ✉️ Email
                        </a>
                    ` : ''}
                    ${hasPhone ? `
                        <a href="tel:${cleanPhone}" class="btn-fac-action btn-fac-phone" title="Call ${f.name}">
                            📞 Call
                        </a>
                    ` : ''}
                    <a href="${f.profileUrl}" target="_blank" class="btn-fac-action btn-fac-profile" title="View profile on cse.uap-bd.edu">
                        🌐 Profile
                    </a>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

function applyFacultyFilters() {
    const searchInput = document.getElementById("facultySearchInput");
    const desigFilter = document.getElementById("facultyDesignationFilter");
    const qualFilter = document.getElementById("facultyQualFilter");
    const clearBtn = document.getElementById("clearFacultySearchBtn");

    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const selectedDesig = desigFilter ? desigFilter.value.toLowerCase() : "all";
    const selectedQual = qualFilter ? qualFilter.value.toLowerCase() : "all";

    if (clearBtn) {
        clearBtn.style.display = query.length > 0 ? "block" : "none";
    }

    const filtered = allFaculty.filter(f => {
        const nameMatch = f.name && f.name.toLowerCase().includes(query);
        const desigMatch = f.designation && f.designation.toLowerCase().includes(query);
        const qualMatch = f.qualification && f.qualification.toLowerCase().includes(query);
        const emailMatch = f.email && f.email.toLowerCase().includes(query);
        const bioMatch = f.bio && f.bio.toLowerCase().includes(query);

        const matchesQuery = query === "" || nameMatch || desigMatch || qualMatch || emailMatch || bioMatch;

        const matchesDesig = selectedDesig === "all" || (f.designation && f.designation.toLowerCase().includes(selectedDesig));
        
        let matchesQual = true;
        if (selectedQual === "phd") {
            matchesQual = f.qualification && f.qualification.toLowerCase().includes("phd");
        } else if (selectedQual === "msc") {
            matchesQual = f.qualification && (f.qualification.toLowerCase().includes("msc") || f.qualification.toLowerCase().includes("master"));
        }

        return matchesQuery && matchesDesig && matchesQual;
    });

    renderFaculty(filtered);
}

function resetFacultyFilters() {
    const searchInput = document.getElementById("facultySearchInput");
    const desigFilter = document.getElementById("facultyDesignationFilter");
    const qualFilter = document.getElementById("facultyQualFilter");
    const clearBtn = document.getElementById("clearFacultySearchBtn");

    if (searchInput) searchInput.value = "";
    if (desigFilter) desigFilter.value = "all";
    if (qualFilter) qualFilter.value = "all";
    if (clearBtn) clearBtn.style.display = "none";

    renderFaculty(allFaculty);
}

function toggleDepartmentDetails(forceOpen) {
    const container = document.getElementById("deptDetailsContainer");
    const toggleBtn = document.getElementById("deptCardToggleBtn");
    if (!container) return;

    const isCurrentlyOpen = container.style.display === "block";
    const shouldOpen = (typeof forceOpen === "boolean") ? forceOpen : !isCurrentlyOpen;

    if (shouldOpen) {
        container.style.display = "block";
        if (toggleBtn) toggleBtn.innerHTML = "▲ Hide Department Details";

        if (allFaculty.length > 0) {
            renderFaculty(allFaculty);
        }

        setTimeout(() => {
            container.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
    } else {
        container.style.display = "none";
        if (toggleBtn) toggleBtn.innerHTML = "🏛️ View Department Details (39 Teachers)";

        const card = document.getElementById("deptCard");
        if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
}

function scrollToFacultyDirectory() {
    switchTab('about');
    toggleDepartmentDetails(true);
}

function populateCoverTeacherDropdown() {
    const select = document.getElementById("coverTeacherQuickSelect");
    if (!select || allFaculty.length === 0) return;

    select.innerHTML = '<option value="">-- Choose Course Teacher from 39 Active Faculty Members --</option>';

    allFaculty.forEach(f => {
        const opt = document.createElement("option");
        opt.value = f.id;
        opt.textContent = `${f.name} (${f.designation})`;
        select.appendChild(opt);
    });
}

function handleCoverTeacherSelect(val) {
    if (!val) return;
    const teacher = allFaculty.find(f => f.id === val);
    if (!teacher) return;

    const nameInput = document.getElementById("coverTeacherName");
    const desigInput = document.getElementById("coverTeacherDesignation");

    if (nameInput) nameInput.value = teacher.name;
    if (desigInput) desigInput.value = teacher.designation;

    updateCoverPreview();
    showToast(`👨‍🏫 Selected ${teacher.name}`);
}

function setupFacultyEventListeners() {
    const searchInput = document.getElementById("facultySearchInput");
    const desigFilter = document.getElementById("facultyDesignationFilter");
    const statusFilter = document.getElementById("facultyStatusFilter");
    const resetBtn = document.getElementById("resetFacultyFiltersBtn");
    const clearBtn = document.getElementById("clearFacultySearchBtn");

    const qualFilter = document.getElementById("facultyQualFilter");
    if (searchInput) searchInput.addEventListener("input", applyFacultyFilters);
    if (desigFilter) desigFilter.addEventListener("change", applyFacultyFilters);
    if (qualFilter) qualFilter.addEventListener("change", applyFacultyFilters);
    if (resetBtn) resetBtn.addEventListener("click", resetFacultyFilters);
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            applyFacultyFilters();
        });
    }
}


if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}
