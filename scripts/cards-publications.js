const cardsPublications = [
  {
    image: "images/publication/publication_Topic-driven%20Ensemble%20for%20Online%20Advertising%20Generation.png",
    heading: "Topic-driven Ensemble for Online Advertising Generation",
    authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
    article: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:O3NaXMp0MMsC"
  },
  {
    image: "images/publication/publication_Convolutional neural networks with hierarchical context transfe….png",
    heading: "Convolutional neural networks with hierarchical context transfe…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    article: "In this work, we consider a problem of predicting the next state of a given area using retrospective information. The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major issues of next state prediction problems - density variability, a sig…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:GnPB-g6toBAC"
  },
  {
    image: "images/publication/publication_Spatiotemporal%20Filtering%20Pipeline%20for%20Efficient%20Social%20Networks%20Dat….png",
    heading: "Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat…",
    authors: "Ksenia Mukhina, Alexander Visheratin, Denis Nasonov",
    article: "One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens’ behavior on various scales can help to improve quality of living, enhance urban management, and advance the development of smart cities. But it is widely known that the…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:blknAaTinKkC"
  },
  {
    image: "images/publication/publication_Hybrid%20Intellectual%20Scheme%20for%20Scheduling%20of%20Heterogeneous%20Wo….png",
    heading: "Hybrid Intellectual Scheme for Scheduling of Heterogeneous Wo…",
    authors: "Mikhail Melnik, Ivan Dolgov, Denis Nasonov",
    article: "Scheduling of workload in distributed computing systems is a well-known optimization proble. A workload\n" +
      "may include single independent software packages. However, the computational process in scientific and\n" +
      "industrial fields is often organized as compos…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:J_g5lzvAfSwC"
  },
  {
    image: "images/publication/publication_Detection%20of%20housing%20and%20utility%20problems%20in%20districts%20through%20soc.png",
    heading: "Detection of housing and utility problems in districts through soc…",
    authors: "Alexandr Zamiralov, Maria Khodorchenko, Denis Nasonov",
    article: "Social media stores a significant amount of information which can be used for extraction of specific knowledge. A variety of topics that arise there concerns a lot of everyday life aspects, including urban-related problems. In this work, we demonstrate the way of using the texts from social media on the topic of ho…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:RGFaLdJalmkC"
  },
  {
    image: "images/publication/publication_Decoupling%20graph%20convolutional%20networks%20for%20large-scale%20supervis….png",
    heading: "Decoupling graph convolutional networks for large-scale supervis…",
    authors: "Mariia Koreneva, Alexander A Visheratin, Denis Nasonov",
    article: "We present a new approach to large-scale supervised heterogeneous graph classification. We decouple a large heterogeneous graph into smaller homogeneous ones. In this paper, we show that our model provides results close to the state-of-the-art model while greatly simplifying calculations and makes it possible…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:ns9cj8rnVeAC"
  },
  {
    image: "images/publication/publication_Peregreen–modular%20database%20for%20efficient%20storage%20of%20historical%20tim….png",
    heading: "Peregreen–modular database for efficient storage of historical tim…",
    authors: "Alexander Visheratin, Alexey Struckov, Semen Yufa, Alexey Muratov, Denis Nasonov, Nikolay B…",
    article: "The rapid development of scientific and industrial areas, which rely on time series data processing, raises the demand for storage that would be able to process tens and hundreds of terabytes of data efficiently. And by efficiency, one should understand not only the speed of data processing operations execution but als…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:hMod-77fHWUC"
  },
  {
    image: "images/publication/publication_Intelligent%20sightseeing%20in%20immensely%20manifold%20cities.png",
    heading: "Intelligent sightseeing in immensely manifold cities: Case …",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov, Lev Manovich",
    article: "In this work, we show how social media data can be used for the improvement of touristic experience. We present an algorithm for automated touristic paths construction. Score function for location depends on three components: location's social media popularity and rating, distances of place from others in r…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:k_IJM867U9cC"
  },
  {
    image: "images/publication/publication_User%20Profiles%20Matching%20for%20Different%20Social%20Networks%20Based.png",
    heading: "User Profiles Matching for Different Social Networks Based …",
    authors: "Timur Sokhin, Nikolay Butakov, Denis Nasonov",
    article: "It is common practice nowadays to use multiple social networks for different social roles. Although this, these networks assume differences in content type, communications and style of speech. If we intend to understand human behaviour as a key-feature for recommender systems, banking risk assessm…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:4JMBOYKVnBMC"
  },
  {
    image: "images/publication/publication_Orienteering%20Problem%20with%20Functional%20Profits%20for%20multi-sourc.png",
    heading: "Orienteering Problem with Functional Profits for multi-sourc…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    article: "Orienteering problem (OP) is a routing problem, where the aim is to generate a path through set of nodes, which would maximize total score and would not exceed the budget. In this paper, we present an extension of classic OP—Orienteering Problem with Functional Profits (OPFP), where the score of …",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:RHpTSmoSYBkC"
  },
  {
    image: "images/publication/publication_Intellectual%20Execution%20Scheme%20of%20Iterative%20Computational%20Models%20….png",
    heading: "Intellectual Execution Scheme of Iterative Computational Models …",
    authors: "Mikhail Melnik, Denis A Nasonov, Alexey Liniov",
    article: "In the modern world, with the growth of the volume of processed data arrays, the logic of solving problems also\n" +
      "becomes more complex. This leads more and more often to the need to use high-performance computational\n" +
      "clusters, such as supercomputers. Created m…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:maZDTaKrznsC"
  },
  {
    image: "images/publication/publication_Urban%20events%20prediction%20via%20convolutional%20neural%20networks%20a….png",
    heading: "Urban events prediction via convolutional neural networks a…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    article: "In today’s world, it is crucial to be proactive and be prepared for events which are not happening yet. Thus, there is no surprise that in the field of social media analysis the research agenda has moved from the development of event detection methods to a brand new area - event prediction models...",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:TFP_iSt0sucC"
  },
  {
    image: "images/publication/publication_Ensemble-based%20method%20of%20answers%20retrieval%20for%20domain%20spe.png",
    heading: "Ensemble-based method of answers retrieval for domain spe…",
    authors: "Iskander Safiulin, Nikolay Butakov, Dmitriy Alexandrov, Denis Nasonov",
    article: "Many companies want or prefer to use chatbot systems to provide smart assistants for accompanying human specialists especially newbies with automatic consulting. Implementation of a really useful smart assistant for a specific domain requires a knowledge base for this domain, that often e…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:bEWYMUwI8FkC"
  },
  {
    image: "images/publication/publication_Evaluation%20of%20modern%20tools%20and%20techniques%20for%20storing%20time-serie.png",
    heading: "Evaluation of modern tools and techniques for storing time-serie…",
    authors: "Alexey Struckov, Semen Yufa, Alexander A Visheratin, Denis Nasonov",
    article: "Time series data as its analysis and applications recently have become increasingly important in different areas and domains. Many fields of science and industry rely on storing and processing large amounts of time series - economics and finance, medicine, the Internet of Things, environmental protection, …",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:iH-uZ7U-co4C"
  },
  {
    image: "images/publication/publication_Workflow%20scheduling%20using%20neural%20networks%20and%20reinforcement%20lear.png",
    heading: "Workflow scheduling using neural networks and reinforcement lear…",
    authors: "Mikhail Melnik, Denis Nasonov",
    article: "The development of information technologies entails a nonlinear growth of both volumes of data and the complexity of data processing itself. Scheduling is one of the main components for optimizing the operation of   the computing system. Currently, there are a large number of scheduling algorithms. However, even in spite of existing hybrid sch…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:r0BpntZqJG4C"
  },
  {
    image: "images/publication/publication_Building%20City-Scale%20Walking%20Itineraries%20Using%20Large%20Geospatia.png",
    heading: "Building City-Scale Walking Itineraries Using Large Geospatia…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    article: "Nowadays, social networks play an important role in many aspects of people's life and in traveling in particular. People share their experience and opinions not only on specialized sites, like TripAdvisor, but also in social networks, e.g. Instagram. Combining information from different sources we can ge…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:R3hNpaxXUhUC"
  },
  {
    image: "images/publication/publication_Forecasting%20of%20the%20Urban%20Area%20State%20Using%20Convolutional%20Neural.png",
    heading: "Forecasting of the Urban Area State Using Convolutional Neural…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Gali-Ketema Mbogo, Denis Nasonov",
    article: "Active development of modern cities requires not only efficient monitoring systems but furthermore forecasting systems that can predict future state of the urban area with high accuracy. In this work we present a method for urban area prediction based on geospatial activity of users in social network. One of the …",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:TQgYirikUcIC"
  },
  {
    image: "images/publication/publication_Multiscale%20event%20detection%20using%20convolutional%20quadtrees%20and%20ada.png",
    heading: "Multiscale event detection using convolutional quadtrees and ada…",
    authors: "A A Visheratin, K D Mukhina, A K Visheratina, D Nasonov, A V Boukhanovsky",
    article: "Increasing popularity of social networks made them a viable data source for many data mining applications and event detection is no exception. Researchers aim not only to find events that happen in networks but more importantly to identify and locate events occurring in the real world. In this paper, we …",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:HDshCWvjkbEC"
  },
  {
    image: "images/publication/publication_Unified%20domain-specific%20language%20for%20collecting%20and%20processing%20dat.png",
    heading: "Unified domain-specific language for collecting and processing…",
    authors: "Nikolay Butakov, Maxim Petrov, Ksenia Mukhina, Denis Nasonov, Sergey Kovalchuk",
    article: "Data provided by social media becomes an increasingly important analysis material for social scientists, market analysts, and other stakeholders. Diversity of interests leads to the emergence of a variety of crawling techniques and programming solutions. Nevertheless, these solutions have a lack of flexibility to sati…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:7PzlFSSx8tAC"
  },
  {
    image: "images/publication/publication_The%20multi-level%20adaptive%20approach%20for%20efficient%20execution%20of%20multi-sc.png",
    heading: "The multi-level adaptive approach for efficient execution of multi-sc…",
    authors: "D Nasonov, N Butakov, M Melnik, A Visheratin, A Linev, P Shvets, S Sobolev, K Mukhina",
    article: "Today advanced research is based on complex simulations which require a lot of computational resources that usually are organized in a very complicated way from technical part of the view. It means that a scientist from physics, biology or even sociology should struggle with all technical is…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:-f6ydRqryjwC"
  },
  {
    image: "images/publication/publication_Precedent-Based%20Approach%20for%20the%20Identification%20of%20Deviant%20Behavio.png",
    heading: "Precedent-Based Approach for the Identification of Deviant Behavio…",
    authors: "Anna V Kalyuzhnaya, Nikolay O Nikitin, Nikolay Butakov, Denis Nasonov",
    article: "The current paper is devoted to a problem of deviant users’ identification in social media. For this purpose, each user of social media source should be described through a profile that aggregates open information about him/her within the special structure. Aggregated user profiles are formally describ…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:IWHjjKOFINEC"
  },
  {
    image: "images/publication/publication_Blockchain-based%20transaction%20integrity%20in%20distributed%20big%20data.png",
    heading: "Blockchain-based transaction integrity in distributed big data …",
    authors: "Denis Nasonov, Alexander A Visheratin, Alexander Boukhanovsky",
    article: "Today Big Data occupies a crucial part of scientific research areas as well as in the business analysis of large companies. Each company tries to find the best way to make generated Big Data sets valuable and profitable. However, in most cases, companies have not enough opportunities and budget t…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:ZeXyd9-uunAC"
  },
  {
    image: "images/publication/publication_Towards%20a%20scenario-based%20solution%20for%20extreme%20metocean%20event%20sim.png",
    heading: "Towards a scenario-based solution for extreme metocean event sim…",
    authors: "A Kalyuzhnaya, D Nasonov, S Ivanov, S Kosukhin, A Boukhanovsky",
    article: "Today, metocean investigations, combined with forecasts and analysis of extreme events, require new design and development approaches because of their complexity. Extreme metocean events forecasting and prevention is an urgent computing task from decision-making and for reaction point of view.",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:qxL8FJ1GzNcC"
  },
  {
    image: "images/publication/publication_Storage%20tier-aware%20replicative%20data%20reorganization%20with%20prioritization.png",
    heading: "Storage tier-aware replicative data reorganization with prioritization…",
    authors: "Anton Spivak, Andrew Razumovskiy, Denis Nasonov, Alexander Boukhanovsky, Anton Redice",
    article: "The importance of data collection, processing, and analysis is rapidly growing. Big Data technologies are in high demand in many fields, including bio-informatics, hydrometeorology, and high energy physics. One of the most popular computational paradigms used in large data processing fra…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:YOwf2qJgpHMC"
  },
  {
    image: "images/publication/publication_Hybrid%20scheduling%20algorithm%20in%20early%20warning%20systems.png",
    heading: "Hybrid scheduling algorithm in early warning systems",
    authors: "A Visheratin, M Melnik, D Nasonov, N Butakov, A Boukhanovsky",
    article: "The development of an efficient Early Warning System (EWS) is essential for the prediction and prevention of imminent natural hazards. In addition to providing a computationally intensive infrastructure with extensive data transfer, high-execution reliability and hard-deadline satisfaction are important req…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:ULOm3_A8WrAC"
  },
  {
    image: "images/publication/publication_Distributed%20data-driven%20platform%20for%20urgent%20decision%20making%20in%20car.png",
    heading: "Distributed data-driven platform for urgent decision making in car…",
    authors: "Sergey V Kovalchuk, Evgeniy Krotov, Pavel A Smirnov, Denis A Nasonov, Alexey N Yakovlev",
    article: "This paper presents ongoing research aimed at developing a data-driven platform for clinical decision support systems (DSSs) that require integration and processing of various data sources within a single solution. Resource management is developed within a framework of an urgent computing approach to address …",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:0EnyYjriUFMC"
  },
  {
    image: "images/publication/publication_Byzantine%20fault-tolerant%20and%20semantic-driven%20consensus%20proto.png",
    heading: "Byzantine fault-tolerant and semantic-driven consensus proto…",
    authors: "Stepan Rakitin, Alexander A Visheratin, Denis Nasonov",
    article: "To provide fault tolerance, modern distributed storage systems use specialized network topologies and consensus protocols that create high overheads. The main disadvantage of existing specialized topologies is a difficulty to implement an efficient data placement that takes into account locality of the data. In scie…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:0EnyYjriUFMC"
  },
  {
    image: "images/publication/publication_Adaptive%20performance%20model%20for%20dynamic%20scaling%20Apache%20Spark%20St.png",
    heading: "Adaptive performance model for dynamic scaling Apache Spark St…",
    authors: "Max Petrov, Nikolay Butakov, Denis Nasonov, Mikhail Melnik",
    article: "Nowadays, data volumes increase exceptionally, a lot of information comes from different sources, for example, from mobile phones, sensors, traffic, etc. All information from these sources can be represented as a data streams, which can grow up and fall in time in their size. In the first case, data proce…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:qUcmZB5y_30C"
  },
  {
    image: "images/publication/publication_Hybrid%20evolutionary%20workflow%20scheduling%20algorithm%20for%20dynami.png",
    heading: "Hybrid evolutionary workflow scheduling algorithm for dynami…",
    authors: "D Nasonov, A Visheratin, N Butakov, N Shindyapina, M Melnik, A Boukhanovsky",
    article: "The optimal workflow scheduling is one of the most important issues in heterogeneous distributed computational environments. Existing heuristic and evolutionary scheduling algorithms have their advantages and disadvantages. In this work we propose a hybrid algorithm based on heuristic methods…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:QIV2ME_5wuYC"
  },
  {
    image: "images/publication/publication_Execution%20time%20estimation%20for%20workflow%20scheduling.png",
    heading: "Execution time estimation for workflow scheduling",
    authors: "A Chirkin, Adam SZ Belloum, S Kovalchuk, Marc X Makkes, M Melnik, A Visheratin, D Nasonov",
    article: "Estimation of the execution time is an important part of the workflow scheduling problem. The aim of this paper is to highlight common problems in estimating the workflow execution time and propose a solution that takes into account the complexity and the stochastic aspects of the workflow compone…",
    link: "https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:kNdYIx-mwKoC"
  },
];
