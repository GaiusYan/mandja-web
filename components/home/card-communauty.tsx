import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CardMember } from './card-member';
import { memberContributionData } from '@/data/data';

export const CardCommunauty = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-xl font-bold'>Partager votre expérience</CardTitle>
                <CardDescription>
                    <p className='text-gray-500'>
                        Rejoignez notre communauté pour partager vos connaissance et découvrir des aspects méconnus de culture.
                    </p>
                    <Button className='mt-5'>
                        Partager une histoire
                    </Button>
                </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col mt-auto pt-4 border-t'>
                <h3 className='font-semibold mb-5'>
                    Membre actifs
                </h3>
                <div className='flex flex-col gap-2'>

                {
                    memberContributionData.map((member, index) => (
                        <CardMember 
                            key={index}
                            author={member.author}
                            contributionNumber={member.contributionNumber}
                            profession={member.profession}
                            authorAvatar={member.authorAvatar}/>
                    ))
                }
                </div>
            </CardContent>
        </Card>
    )
}