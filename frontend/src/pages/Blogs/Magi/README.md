
The Triad of Innovations in Manga Accessibility


Executive Summary: The Triad of Innovations in Manga Accessibility

The inherent reliance of comics on visual storytelling presents a significant accessibility barrier for visually impaired individuals. This report documents a multi-stage research effort that progressively addresses this challenge, culminating in a comprehensive system for generating immersive literary narratives from manga. The journey began with Magi, a foundational model that established a page-level diarization pipeline by formulating detection and association tasks as a graph generation problem. This initial success, while promising, was constrained by its inability to produce coherent, chapter-wide transcripts with consistent character names. The subsequent model, Magiv2, directly confronted these limitations by introducing a novel, training-free constraint optimization method that leverages an external character bank for consistent character naming across an entire chapter. Magiv2 also pioneered the use of speech-bubble tails as a visual cue for more accurate speaker attribution and a lightweight head for classifying essential dialogue. The final iteration, Magiv3, represents a conceptual leap, moving beyond sterile transcripts to generate rich, evocative prose. Magiv3's innovation lies in a unified, multi-modal architecture capable of performing all foundational vision tasks and a new, critical step: character grounding. This capability, combined with the power of large language models, enables a holistic, multi-step pipeline that transforms raw manga pages into deeply engaging literary narratives, thereby unlocking the full richness of the medium for a wider audience.

1. Introduction: The Evolution of Manga Accessibility through AI

Manga, a globally celebrated art form, captivates millions of readers through its unique blend of visual art and compelling narratives. However, this medium's heavy reliance on intricate illustrations, complex panel layouts, and expressive visual cues renders it largely inaccessible to individuals with visual impairments (PVI).1 Research has shown that PVI desire more than just a basic dialogue transcript; they seek rich descriptions of scenes, character emotions, and actions to fully engage with the story.1 Addressing this profound accessibility gap requires a sophisticated, automated system capable of not only understanding manga's complex visual grammar but also translating it into a coherent, descriptive narrative.
This report frames the research presented in three papers not as isolated efforts, but as a sequential, multi-stage research program. Each model—Magi (V1), Magiv2, and Magiv3—was designed to build directly upon the preceding one, addressing its fundamental limitations and expanding the scope of the problem to provide an increasingly comprehensive and accessible reading experience. This progression from a basic page-level transcription system to a holistic, prose-generating narrative engine establishes a clear technological trajectory towards a more nuanced, human-like understanding of comics.

2. Magi (V1): The Foundational Diarization Model

The initial step in this research progression was the development of Magi, a foundational model for automated manga diarization. Its primary function was to generate a page-by-page transcription of "who said what and when".1 To achieve this, Magi was engineered with key capabilities: the detection of panels, text, and characters, the clustering of characters by their identity, and the association of dialogue to its speaker.1

2.1. Architecture and Task Formulation

A central design choice of the Magi model was its unified architecture, which formulated the problem as a graph generation task. In this paradigm, the detected elements—panels, text blocks, and characters—serve as the "nodes" of the graph, while the associations between them, such as character identity and text-to-speaker relationships, are treated as the "edges".1 This approach was a departure from prior methods that often relied on multiple, separate models for each task, allowing Magi to perform these complex functions within a single framework.
The model’s architecture processes an entire high-resolution manga page at once, a technique referred to as "in-context" detection and association.1 The input image is first processed by a CNN backbone, specifically a ResNet-50, which produces a spatial feature map. This is then fed into a DETR-style encoder-decoder transformer.1 This transformer outputs a set of
N object tokens, denoted as , as well as two specialized tokens, `[C2C]` and , which are specifically designed to encode interactions in a pooled fashion.1 The
tokens are then processed by a series of detection heads to generate bounding boxes and classifications. Subsequently, MLP-based association modules process pairs of these object tokens along with the special `[C2C]` and tokens to determine character-to-character and text-to-character relationships.1

2.2. The Diarization Pipeline

Magi’s diarization process was implemented in a two-stage pipeline. The first stage involved ordering the detected elements to ensure the final transcript followed the correct reading order. This was accomplished by representing the panels as a directed acyclic graph (DAG) and applying a Topological Sorting algorithm.1 This method was a significant improvement over traditional "cut"-based approaches, which often failed in the presence of overlapping panels, a common occurrence in manga layouts.1 Once the elements were ordered, the second stage used a fine-tuned
TrOCR model to perform Optical Character Recognition (OCR) and assemble the final transcript, which leveraged all the extracted data.1

2.3. Acknowledged Limitations

Despite its groundbreaking contributions, the Magi model had several critical shortcomings that prevented its practical application. First, its use of simple numerical labels (1, 2, 3, etc.) to denote characters on a page-by-page basis resulted in inconsistent character numbering across different pages of a chapter. This made the resulting transcript difficult to follow and non-intuitive for the reader.1 Second, the model struggled to reliably associate dialogues with their correct speakers, which led to a disjointed and confusing narrative.1 Finally, Magi was unable to differentiate between essential dialogue and non-essential texts, such as sound effects ("Thud," "Whoosh") or scene descriptions (e.g., street signs). Improperly including these elements in the transcript disrupted the narrative flow and diminished the quality of the final output.1 These limitations made it clear that a new, more robust approach was necessary.

3. Magiv2: Enhancing Transcript Coherence with Chapter-Wide Naming

The development of Magiv2 was a direct response to the shortcomings of Magi, with a focus on enhancing transcript coherence and narrative consistency. Its key innovations were designed to solve the precise limitations of its predecessor and produce chapter-wide transcripts that are more intuitive and accurate.

3.1. Key Innovations and Improvements over V1

A primary innovation of Magiv2 was its ability to generate chapter-wide transcripts with consistent character names. This addressed the major shortcoming of Magi's inconsistent per-page numbering.1 The solution involved two components: the introduction of a new
character bank dataset called PopCharacters, which contains names and exemplar images of over 11,000 principal characters, and a novel, training-free character naming method.
This naming method formulates the assignment problem as a Mixed Integer Linear Programming problem. The objective is to compute the optimal assignment of each character crop to a character in the bank by minimizing the distance between their embeddings.1 The objective function for this is given by:
minx​∑i=1n​∑j=1k+1​dij​xij​
where n is the number of character crops, k is the number of characters in the bank, and dij​ is the distance between crop i and character j. This is subject to several constraints that enforce narrative consistency across the chapter.1 These constraints include:
Each crop must be assigned to exactly one character: ∑j=1k+1​xij​=1,∀i∈{1,...,n}
must-link constraints: If two crops, u and v, are part of the same per-page cluster, they must be assigned the same identity: xu,j​−xv,j​=0,∀(u,v)∈M,∀j∈{1,...,k+1}
cannot-link constraints: If two crops, u and v, are from different characters on the same page, they must not be assigned to the same character, unless they are both categorized as "other": xu,j​+xv,j​≤1,∀(u,v)∈C,∀j∈{1,...,k}
This constraint optimization approach leverages per-page associations to provide a more robust signal than simple crop-based similarity, enabling it to resolve ambiguities that would confound simpler clustering models.1
Magiv2 also significantly enhanced speaker association by becoming "tail-aware." The research recognized that speech-bubble tails are crucial visual cues used by artists to indicate who is speaking. By incorporating annotations for tail boxes and their associations with text, Magiv2's model can use this information to achieve "significantly higher precision in speaker diarisation" compared to prior works.1 Finally, to address the issue of non-essential text, a new "lightweight text-classification head" was added to the model's visual backbone. This head leverages visual differences in font styles and text placement to accurately distinguish essential dialogue from non-dialogue elements, thereby producing a cleaner and more coherent transcript.1

3.2. Magiv2's Chapter-Wide Inference Pipeline

The enhanced Magiv2 pipeline follows a three-step process to generate a chapter-wide transcript.1 First, the model performs
Detection and Association on each page independently. Second, the Chapter-Wide Character Naming method is applied to all the detected character crops across the chapter, using the external character bank. Finally, the Transcript Generation step assembles the final output by filtering out non-essential texts, ordering the remaining dialogue, and performing OCR.1

3.3. Performance Analysis

Quantitative evaluation confirms Magiv2's superiority over Magi. In detection, Magiv2 demonstrates consistently improved performance, with higher precision in localizing texts, tails, and panels.1 The new model's per-page character clustering results are also notably better, which can be attributed to its semi-supervised learning scheme.1 Crucially, the addition of new capabilities proved highly effective. Data shows a significant improvement in text-to-speaker association, with a high average precision of
0.7499 on the PopManga-X (Test-S) dataset, compared to Magi's score of 0.5248.1 Furthermore, the constraint optimization method for chapter-wide character naming provides compelling evidence of its value. On the PopManga-X (Test-S) dataset, it achieves an accuracy of
0.7273, far outperforming a naive K-means clustering baseline which scores only 0.3801.1 This demonstrates that the strategic use of external, curated knowledge and a robust optimization method can resolve ambiguities that trip up simpler, self-contained models.

4. Magiv3: Towards Immersive Literary Narratives

With the problem of generating coherent dialogue transcripts largely solved, the research advanced to a new and more ambitious goal: to move beyond a literal, sterile transcript and generate "evocative and immersive prose".1 The objective of Magiv3 was not simply to report on what was said, but to translate the full visual context of a manga page into a flowing narrative that captures the depth of characters, their emotions, and the vivid settings in which they reside.

4.1. The Unified Magiv3 Model

Magiv3's architecture is a transformer-based, multi-modal encoder-decoder inspired by Florence-2, and a single set of model weights is used to unify several tasks.1 This represents a significant architectural improvement, as it eliminates the need for multiple specialized models. This single model can perform three distinct tasks:
Detection and Association, OCR, and a new, critical step called Character Grounding. Each task is handled independently by providing the model with a different task-specific prompt.1

4.2. Novel Contributions and Improvements over V2

The key innovation of Magiv3 is the new Character Grounding capability. This process is essential for bridging the gap between raw visual information and rich narrative. It involves precisely identifying and localizing character-referencing phrases from a text-based caption—such as 'the boy', 'girl', or 'the character on the right'—to their specific bounding boxes within the panel image.1 This capability is critical for tying isolated panel descriptions to the broader story and ensuring continuity.
These new capabilities, along with the foundational elements from prior models, are integrated into a five-step, 'Page to Prose' pipeline.1 In the first two steps, Magiv3 handles
Detection and Association and Transcript Generation. The new V3-specific steps are then performed: Captioning, where each panel is processed individually to generate an informative, self-contained description, and Character Grounding, which links the descriptions to the characters.1 The final and most creative step is
Prose Generation. This stage leverages the synthesis power of a large foundational language model (LLM/VLM), such as GPT-4o or Gemini, by using zero-shot prompting to combine the structured data from all previous steps into a cohesive, flowing narrative.1 This modular approach also allows for flexibility in the output format, enabling the model to produce screenplays or children's stories as needed.1
To enable this advanced research, a new dataset called PopCaptions was created. This dataset contains human-annotated captions with character-grounding annotations and page-level plot summaries, providing a valuable resource for training and evaluating these new capabilities.1

4.3. Performance Analysis

The efficacy of the Magiv3 model is demonstrated by its performance on these advanced tasks. On the PopCaptions dataset, the character grounding capability of Magiv3-cg, a variant specifically fine-tuned for this task, achieves an F1 score of 0.74, a significant improvement over the Florence-2 baseline which scores only 0.28.1 This confirms that the new capability is effective. Furthermore, the final prose generation pipeline achieves a high average score of
3.61 on a 1-5 scale, as judged by a panel of independent LLMs.1 The use of this
LLM judge-based evaluation protocol is itself a notable development, as it provides a more nuanced, qualitative-focused assessment for open-ended creative tasks than traditional metrics like CIDEr, which are ill-suited for this purpose.1

5. Conclusion: A Triad of Innovations

The research presented across these three papers demonstrates a deliberate and successful progression in solving the challenge of manga accessibility for visually impaired individuals. The journey began with Magi, a foundational model that established a successful framework for page-level diarization through a unified graph generation paradigm. It was a pragmatic step that balanced complexity with computational tractability. This foundation allowed for the development of Magiv2, which addressed Magi's critical limitations by introducing a novel, external knowledge source—the character bank—and a constraint optimization method to achieve chapter-wide narrative consistency. Magiv2's success in incorporating new visual cues like speech-bubble tails and text classification highlights the value of targeted, incremental improvements.
Finally, Magiv3 represents the maturation of this research, moving beyond a literal transcription to a holistic, narrative-driven solution. The model’s unified, multi-modal architecture streamlines the foundational tasks, while its new character grounding capability provides the crucial link between visual content and rich prose. The success of the final, hybrid pipeline, which leverages Magiv3 to prepare structured data for a final, creative LLM, showcases a sophisticated and powerful strategy for tackling complex, human-centric challenges. This approach acknowledges the strengths of specialized models for vision tasks while harnessing the immense creative and synthesis power of large foundation models.
While significant progress has been made, challenges remain. For instance, improving the model's accuracy in character grounding in crowded scenes and developing methods to distinguish between "unnamed person 1" and "unnamed person 2" are areas for future work.1 Nevertheless, this research serves as a compelling case study in the power of sequential innovation and the strategic integration of AI systems to transform a complex visual medium into a rich, accessible narrative experience.

Citations

Here are the key papers that form the basis of this implementation:

*   **The Manga Whisperer: Automatically Generating Transcriptions for Comics**
    *   *Authors:* Ragav Sachdeva, Andrew Zisserman
    *   *Link:* [https://arxiv.org/abs/2401.10224](https://arxiv.org/abs/2401.10224)

*   **Tails Tell Tales: Chapter-Wide Manga Transcriptions with Character Names**
    *   *Authors:* Ragav Sachdeva, Gyungin Shin, and Andrew Zisserman
    *   *Link:* [https://arxiv.org/abs/2408.00298](https://arxiv.org/abs/2408.00298)

*   **From Panels to Prose: Generating Literary Narratives from Comics**
    *   *Authors:* Ragav Sachdeva and Andrew Zisserman
    *   *Link:* [https://arxiv.org/abs/2503.23344](https://arxiv.org/abs/2503.23344)