import VCard from "vcard-creator";
import download from "downloadjs";
import { contactData } from "./contactData";
export default function App() {
  const downloadFile = () => {
    const myVCard = new VCard();
    myVCard
      .addCompany("com")
      .addJobtitle(contactData?.firstname || "")
      .addRole(contactData?.roles || "")
      .addEmail("huy@")
      .addPhoneNumber("1", "PREF;WORK")
      .addPhoneNumber("2", "WORK")
      .addAddress("HN")
      .addPhoto(contactData.image.data, contactData.image.mime);
    download(myVCard.toString(), "dlText.vcf");
  };
  return (
    <div >
      <div onClick={downloadFile}>Dowload</div>
      <a
        // ng-if="!loadDemo"
        href="//qrco.de/handlePost/bdcPv9/?download=true"
        // rel="external"
        // class="ng-scope"
      >
        Tai xuong
      </a>
    </div>
  );
}
