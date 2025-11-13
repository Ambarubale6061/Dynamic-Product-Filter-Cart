import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const NotificationCenter = ({ notifications }) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center space-y-3">
      <AnimatePresence>
        {notifications.map((note) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`px-5 py-3 rounded-xl text-white shadow-lg text-base font-medium flex items-center gap-2 backdrop-blur-md
              ${
                note.type === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-600"
                  : note.type === "error"
                  ? "bg-gradient-to-r from-rose-500 to-red-600"
                  : "bg-gradient-to-r from-sky-500 to-blue-600"
              }`}
          >
            🛒 {note.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationCenter;
