import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export  function CreatePublication() {
  
    return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Créer une publication</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Créer une publication</DialogTitle>
            <DialogDescription>
                {/* <AvatarPublication></AvatarPublication> */}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid  gap-3">
                <Textarea id="name-1" 
                    className="border-none w-full"
                    placeholder="Quoi de neuf ?"
                    name="name" />
            </div>
            <div className="
                    border 
                    p-4 
                    rounded-sm
                    gap-4
                    flex flex-row">
                <span>
                    Ajouter une image à votre publication
                </span> 
                <span>
                    <Input type="file"></Input>
                </span>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Annuler</Button>
            </DialogClose>
            <Button type="submit">Publier</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
