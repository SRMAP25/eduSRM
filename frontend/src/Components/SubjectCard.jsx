import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { BookOpen } from "lucide-react";
import { EditDialog } from "../Components/EditDialog";

const SubjectCard = ( {details} ) => {
  return (
    <Card className="mx-[auto] my-3 group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 max-w-sm ">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent z-5" />
        <img
          alt={details.title}
          className="w-full h-48 object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          height="200"
          src={details.imageUrl}
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
      </div> 
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-xl font-bold">{details.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">{details.description}</p>
      </CardContent>
      <CardFooter className="px-4 py-3 bg-muted/50 flex justify-between items-center mt-auto">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span>{details.lessonCount} lessons</span>
        </div>
        <EditDialog/>
      </CardFooter>
    </Card>
  )
}

export default SubjectCard