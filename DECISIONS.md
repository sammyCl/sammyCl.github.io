# Decision log

Your methods section. About one page total.

Answer these as you go, not the night before it is due.
Specifics beat polish - a short honest answer is worth more than a long vague one.

Delete these instructions when you are done, or leave them. It does not matter.

---

## 1. What did you set out to build, and what changed?

What you wanted at the start, and what is actually live now.
Name one thing you dropped or added along the way, and why.

I wanted to build a website that was a bestiary, and my initial idea was to try and
match the Monster Manual from Dungeons and Dragons. I quickly branched off from the
idea of replicating the Monster Manual though because of how much time and space 
that would require. Instead, I chose to focus on Dragons, Merpeople, Phoenixes, and
Griffins, that way I could replicate the four elements.

I began by designing the landing page and the Dragons page. I wanted the landing page
to act as a table of contents that let the user navigate to different pages. With the
Dragons page, I established the basic format for the creature pages. Each page would 
have a title card describing the species in general and then do brief descriptions
of the different sub-species. Below that there would then be tiles for each subspecies,
when these tiles were clicked the sub-species information would expand and you could
read a quick blurb about the sub-species, some lore behind it, and a quick story. 
This information would show up on the right, and the left would scroll through different
photos. 

I made pages for all of the creatures, and then began working on getting photos for them.
I knew that I wanted to have AI-generated photos for the different sub-species, but I 
also chose to generate photos for the different pages' backgrounds as well. This was done
using ChatGPT. I also chose to add music to each page, which was generated using Gemini's
Lyria. After finishing the creature pages, I added a quiz page to allow readers to see 
which of the creature sub-species they were.

What was dropped from my original idea: Recreating the Monster Manual from DnD.
What was added: AI generated backgrounds and music and a quiz for users to take.

---

## 2. A fork in the road

Name one real choice where you could have gone two ways.
Plain HTML or a framework. One page or several. Your own CSS or someone's template.
What goes on the front page and what does not.

Say which you picked, what the alternative was, and what you gave up by not taking it.

"There was no alternative" is not an answer. Find the fork.

There were many instances throughout the project where I had forks in the road. One 
that occurred early on was deciding what language I wanted to use, Javascript or CSS.
After having a discussion with Claude, I decided to move forward with Javascript. 
This decision was made after I described my vision for how different interactions on
the website would function. Claude then told me how this could be accomplished with
each language, and the Javascript method fit how I wanted the interactions to function
better. From my understanding, choosing to use Javascript instead of CSS made it so
what is controlled by Javascript takes a bit longer to load than CSS would.

---

## 3. Where you overruled the agent

One time Claude suggested, wrote, or claimed something and you did not take it.

What did it do? How did you notice? What did you do instead?

If it genuinely never happened, say so plainly, and then say what you would have had to
check in order to notice. Being honest here costs you far less than a story you cannot
defend when you record your video.

A lot of the times I disagreed with Claude came from the visual decisions that it made.
For the tiles that let you select the different creature pages and the sub-species on 
the creature pages, Claude initially had them left aligned, which put them in odd places
if there were 3 on one line and 1 on the other. I had Claude make it so any lines created
were centered.

I also had disagreements on how the backgrounds of different pages should be done. Claude
initially stated that the backgrounds for different pages should be done using CSS as 
using AI to generate the images would take too long. However, I pointed out that given
that I was already using AI-generated images for each sub-species, adding additional 
images for the creature pages would not take a significant amount of time or resources.

---

## 4. How you know it works

What check did you run, and what did it tell you?

Then the real question: **what would have made this check fail?**
A check that could not have failed is not a check.

Link to your `verification/` folder.

The check I ran was `curl -i https://sammyCl.github.io`. It told me that
the page was up and running, `HTTP/2 200`, and outputted more information
about the page such as what the index.html says, when the page was updated,
and how the page is hosted. There are several things that could have made this 
verification check fail. One example is if the index.html had been renamed, moved,
or deleted entirely, all of these would have resulted in a 404 error, indicating
that the site was broken in some way. 

[verification](verification/)

---

## 5. What is still wrong

One thing on your own site that is not right, not finished, or that you do not
fully understand.

What would you do next, and how would you find out?

I am not happy with how the sub-species pictures rotate through when you are reading
about each sub-species. The pictures are kind of small, and they rotate a bit too 
quickly through everything. From my understanding, they are somewhat attached to the
sections of text, and if I had more time, I would try to adjust them to corresponding
to how much of the text has been read instead of which section of text you are looking
at.
