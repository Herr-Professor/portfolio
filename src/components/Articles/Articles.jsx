import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import css from './Articles.module.scss';
import { fadeIn, staggerChildren, textVariant } from '../../utils/motion'; // Assuming utils are correct
import { MdClose } from 'react-icons/md'; // Close icon for modal

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch articles from the public data.json file
    fetch('/data.json') // Path relative to the public folder
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch(fetchError => {
        console.error("Error fetching articles:", fetchError);
        setError("Failed to load articles.");
        setIsLoading(false);
      });
  }, []); // Empty dependency array means this runs once on mount

  const handleOpenModal = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  // Modal animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "-50px", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
    exit: { y: "50px", opacity: 0 }
  };


  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      {/* Anchor for navigation */}
      <a className="anchor" id="articles"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* Heading */}
        <motion.div variants={textVariant(0.4)} className={css.heading}>
          <span className="primaryText">Articles & Research</span>
          <p style={{ marginTop: "10px" }}>Insights from my projects and explorations.</p>
        </motion.div>

        {/* Articles Grid */}
        <div className={css.articleGrid}>
          {isLoading && <p>Loading articles...</p>}
          {error && <p className={css.errorText}>{error}</p>}
          {!isLoading && !error && articles.length === 0 && <p>No articles available yet.</p>}

          {!isLoading && !error && articles.map((article, i) => (
            <motion.div
              key={article.id}
              variants={fadeIn("up", "tween", (i * 0.1) + 0.3, 0.5)}
              className={css.articleCard}
              onClick={() => handleOpenModal(article)}
            >
              <h3 className={css.articleTitle}>{article.title}</h3>
              <p className={css.articleAbstract}>{article.abstract}</p>
              <span className={css.readMore}>Read More...</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - using AnimatePresence for exit animation */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className={css.modalBackdrop}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleCloseModal} // Close on backdrop click
          >
            <motion.div
              className={css.modalContent}
              variants={modalVariants}
              // Prevent closing when clicking inside the content area
              onClick={(e) => e.stopPropagation()}
            >
              <div className={css.modalHeader}>
                <h2>{selectedArticle.title}</h2>
                <button onClick={handleCloseModal} className={css.closeButton} aria-label="Close article">
                  <MdClose size={24} />
                </button>
              </div>
              <div className={css.modalBody}>
                {/* Use dangerouslySetInnerHTML ONLY if your JSON content contains HTML you trust */}
                 <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                {/* If content is plain text, just render it: */}
                {/* <p>{selectedArticle.content}</p> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Articles;
