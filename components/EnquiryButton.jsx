"use client";

import Icon from "./Icon";
import { openEnquiry } from "@/lib/enquiryBus";

export default function EnquiryButton({ packageName, className }) {
  return (
    <button type="button" onClick={() => openEnquiry({ package: packageName })} className={className}>
      <Icon name="mail" className="h-3.5 w-3.5" />
      Enquiry
    </button>
  );
}
