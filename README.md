# LIMS Webapp (React)

Problem Statement:

Often times rapidly expanding biotechs expand at such a scale that their information is lost. There is no proper information management because the team started small enough to email everything, but as more and more people join, the need for centralized data is apparent. Most smaller biotechs start out by putting all their experiment metadata in many csv files that are forwarded around the company. This, after expansion of the company, can cause a loss of information and an inability to tell what progress has occurred.




Solution Statement:

My project is a LIMS system (Laboratory Information Management System).  These systems manage information across many experiments and samples and their associated scientists. They keep track of work progress, origins of experiments, and other metadata related to these experiments. This is valuable to expansion because now data is centralized to a database and is consistent across all views. This is something I have seen as necessary first hand at my last co-op.




User:

The user for this project would be scientists working at their biotech companies. They have fields first name, last name, email, username, password, date of birth, and a role based on actual roles in biotech companies. They would be able to add samples to experiments and write metadata about their respective experiments.




Domain Object 1:

The first domain object is the Experiment object. This represents an experiment that a scientist would perform with particular samples. One scientist can perform many experiments. These experiments have a title, a treatment type (the technique being used ex. CRISPR), the date performed, notes, and associated scientist. 




Domain Object 2:

The second domain object is the Sample object. This represents a sample that would be used in an experiment. Usually these would be selected to be relevant to the experiment at hand and, in my experience, be ordered from third party manufacturers. One experiment can have many samples. The sample fields are the name, organism it was collected from, tissue origin, the DNA sequence, the disease it has, the vendor, any notes, and an associated experiment.

Links are here and on canvas:

Front End React app: https://github.com/patankarh/lims-webapp

Back End Java (on master branch): https://github.com/patankarh/lims_backend
