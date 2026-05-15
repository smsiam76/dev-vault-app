import { ExternalLink, PenTool } from "lucide-react";
import Divider from "../Shared/Divider/Divider";
import { Link } from "react-router";
import { format } from "date-fns";

const ResourcesBox = ({ resource }) => {
  const {
    resourceTitle,
    isPinned,
    isCompleted,
    personalNote,
    createdAt,
    resourceLink,
    resourceType,
    status,
  } = resource;
  return (
    <div className="border-2 border-primary rounded-md">
      <div className="flex justify-between mb-4 bg-primary/50 px-5 py-4">
        <span className="block">
          <PenTool />
        </span>
        <p>{resourceType}</p>
      </div>
      <div className="px-5 py-4 mb-8">
        <h3 className="text-2xl font-bold">{resourceTitle}</h3>
        <p className="text-xs mb-4">{format(new Date(createdAt), "dd MMM yyyy")}</p>
        <p className="text-yellow-600">
          {personalNote.length >= 150
            ? personalNote.slice(0, 147) + "..."
            : personalNote}
        </p>
      </div>
      <div className="flex justify-center py-4 border-t-2 border-primary/20">
        <Link 
        to={resourceLink}
        className="p-2 rounded-md border border-primary/50 text-sm text-primary/70 cursor-pointer hover:text-primary duration-300 transition-all ease-in-out"><ExternalLink /></Link>
      </div>
    </div>
  );
};

export default ResourcesBox;
